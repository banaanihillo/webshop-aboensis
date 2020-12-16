const userRouter = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")
const Item = require("../models/Item")

userRouter.post("/", async (request, response) => {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(
        request.body.password,
        saltRounds
    )

    const newUser = new User({
        userName: request.body.userName,
        electronicMail: request.body.electronicMail,
        passwordHash: passwordHash
    })

    const user = await newUser.save()
    response.json(user)
})

userRouter.get("/:id", async (request, response) => {
    try {
        const foundUser = await User
            .findById(request.params.id)
            .populate("itemsForSale")
            .populate("itemsSold")
            .populate("itemsBought")
        
        if (!foundUser) {
            return response.status(400).send({
                error: `The id ${request.params.id} does not exist.`
            })
        } else {
            response.json(foundUser)
        }
    } catch (error) {
        console.log(`The id is in the wrong format: ${error}`)
        return response.status(500).send({
            error: `The id ${request.params.id} is malformed.`
        })
    }
})

userRouter.get("/", async (_request, response) => {
    const allUsers = await User.find({})
    response.json(allUsers)
})

userRouter.patch("/:id", async (request, response) => {
    try {
        const buyer = await User.findById(request.params.id)
        const seller = await User.findById(request.body.sellerid)

        const updatedItemsBought = buyer
            .itemsBought.concat(request.body.itemid)
        const updatedItemsSold = seller
            .itemsSold.concat(request.body.itemid)
        //no triple equals here, because _id can be an object
        const updatedItemsForSale = seller
            .itemsForSale.filter(item =>
                item._id != request.body.itemid
            )
        
        const updatedBuyerItems = {
            itemsBought: updatedItemsBought
        }
        const updatedBuyer = await User.findByIdAndUpdate(
            request.params.id,
            updatedBuyerItems,
            {new: true}
        )

        const updatedSellerItems = {
            itemsSold: updatedItemsSold,
            itemsForSale: updatedItemsForSale
        }
        const updatedSeller = await User.findByIdAndUpdate(
            request.body.sellerid,
            updatedSellerItems,
            {new: true}
        )

        const updatedItemProperties = {
            buyer: request.params.id,
            forSale: false
        }
        const updatedItem = await Item.findByIdAndUpdate(
            request.body.itemid,
            updatedItemProperties,
            {new: true}
        )

        response.json({
            updatedBuyer,
            updatedSeller,
            updatedItem
        })
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = userRouter
