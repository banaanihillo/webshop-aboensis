const userRouter = require("express").Router()
//const bcrypt = require("bcrypt")
const User = require("../models/User")
const Item = require("../models/Item")

userRouter.post("/populate", async (request, response) => {
    await User.deleteMany({})
    const populatedUsers = await User.insertMany(
        request.body   
    )
    return response.json(populatedUsers)
})

userRouter.get("/:username", async (request, response) => {
    const user = await User.find({
        userName: request.params.username
    })
    return response.json(user)
})

userRouter.post("/populated-items", async (request, response) => {
    const sellers = request.body.map(item => item.seller)
    const itemIdentifiers = request.body.map(item => item._id)
    const sellerOneItems = itemIdentifiers.slice(0, 10)
    const sellerTwoItems = itemIdentifiers.slice(10, 20)
    const sellerThreeItems = itemIdentifiers.slice(20, 30)
    const populatedSellerOne = await User.findOneAndUpdate(
        {
            _id: sellers[0]
        },
        {
            $push: {
                itemsForSale: sellerOneItems
            }
        },
        {
            new: true
        }
    )
    const populatedSellerTwo = await User.findOneAndUpdate(
        {
            _id: sellers[10]
        },
        {
            $push: {
                itemsForSale: sellerTwoItems
            }
        },
        {
            new: true
        }
    )
    const populatedSellerThree = await User.findOneAndUpdate(
        {
            _id: sellers[20]
        },
        {
            $push: {
                itemsForSale: sellerThreeItems
            }
        },
        {
            new: true
        }
    )
    const populatedItems = {
        1: populatedSellerOne,
        2: populatedSellerTwo,
        3: populatedSellerThree
    }
    return response.json(populatedItems)
})

userRouter.post("/", async (request, response) => {
    /*
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(
        request.body.password,
        saltRounds
    )
    */

    const newUser = new User({
        userName: request.body.userName,
        electronicMail: request.body.electronicMail,
        passwordHash: request.body.password
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
        const itemIdentifiers = Object.values(request.body)
            .map(item => item._id)

        const sellerIdentifiers = Object.values(request.body)
            .map(item => item.seller)

        itemIdentifiers.forEach(async itemIdentifier => {
            await User.updateOne(
                {//parameter one: filter
                    itemsForSale: {
                        $in: itemIdentifier
                    }
                },
                {//parameter two: update
                    $pull: {
                        itemsForSale: itemIdentifier
                    },
                    $push: {
                        itemsSold: itemIdentifier
                    }
                }
            )
            await Item.updateOne(
                {
                    $and: [
                        {
                            seller: {
                                $in: sellerIdentifiers
                            }
                        },
                        {
                            _id: itemIdentifier
                        }
                    ]
                },
                {
                    $set: {
                        buyer: request.params.id,
                        forSale: false
                    }
                } //
            )
        })
        const updatedSellers = await User.find({})
        const updatedItems = await Item.find({})
        
        const buyer = await User.findById(request.params.id)
        const updatedItemsBought = buyer
            .itemsBought.concat(itemIdentifiers)
        const updatedBuyerItems = {
            itemsBought: updatedItemsBought
        }
        const updatedBuyer = await User.findByIdAndUpdate(
            request.params.id,
            updatedBuyerItems,
            {new: true}
        )
        //
        response.json({
            updatedBuyer,
            updatedSellers,
            updatedItems
        })
        
    } catch (error) {
        console.log(error)
    }
})

userRouter.delete("/:id", async (request, response) => {
    const deletedUser = await User.findByIdAndRemove(request.params.id)
    if (!deletedUser) {
        return response.status(400).json({
            error: "Looks like that user is already gone"
        })
    } else {
        return response.status(204).end()
    }
})

userRouter.delete("/", async (_request, response) => {
    await User.deleteMany({})
    return response.status(204).end()
})

module.exports = userRouter
