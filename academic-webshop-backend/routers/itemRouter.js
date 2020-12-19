const itemRouter = require("express").Router()
const Item = require("../models/Item")
const User = require("../models/User")
const jsonWebToken = require("jsonwebtoken")

itemRouter.post("/populate", async (request, response) => {
    await Item.deleteMany({})
    const populatedItems = await Item.insertMany(request.body)
    return response.json(populatedItems)
})

itemRouter.get("/ping", (_request, response) => {
    response.send("Pong")
})

itemRouter.get("/", async (_request, response) => {
    const items = await Item.find({})
    response.json(items)
})

itemRouter.get("/for-sale", async (_request, response) => {
    const items = await Item.find({
        forSale: true
    })
    response.json(items)
})

const getAuthorization = (request) => {
    const authorization = request.get("authorization")
    if (
        authorization
        && authorization.toLowerCase().startsWith("bearer ")
    ) {
        return authorization.substring(7)
    } else {
        console.error("Unauthorized - no authorization header found.")
        return
    }
}

itemRouter.post("/", async (request, response) => {
    if (!request.body.name || !request.body.price) {
        return response.status(400).json({
            error: "All items should have a name and a price."
        })
    }

    const token = getAuthorization(request)
    if (!token) {
        return response.status(401).json({
            error: "No token found."
        })
    }

    const decodedToken = jsonWebToken.verify(
        token,
        process.env.SECRET
    )
    if (!decodedToken) {
        return response.status(401).json({
            error: "Invalid token."
        })
    }
    const user = await User.findById(decodedToken._id)

    const newItem =  new Item({
        name: request.body.name,
        price: request.body.price,
        description: request.body.description,
        date: new Date(),
        seller: user._id,
        forSale: true
    })


    const postedItem = await newItem.save()
    user.itemsForSale = user.itemsForSale.concat(postedItem._id)
    await user.save()
    response.json(postedItem)
})

itemRouter.get("/:id", async (request, response) => {
    try {
        const matchedItem = await Item
            .findById(request.params.id)
            .populate("seller", {userName: 1, _id: 1})
            .populate("buyer", {userName: 1, _id: 1})
        
        if (!matchedItem) {
            return response.status(404).send("That id does not exist.")
        } else {
            response.json(matchedItem)
        }
    } catch (error) {
        console.log(`That id is in the wrong format: ${error}`)
        return response.status(500).send({
            error: `Malformed id: ${request.params.id}`
        })
    }
})

itemRouter.delete("/:id", async (request, response) => {
    const deletedItem = await Item.findByIdAndDelete(request.params.id)
    if (!deletedItem) {
        console.error(`Looks like ${request.params.id} is wrong.`)
    } else {
        console.log(`Successfully deleted ${request.params.id}.`)
        response.status(204).end()
    }
})

itemRouter.patch("/:id", async (request, response) => {
    const patchedItem = await Item.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true}
    )
    if (!patchedItem) {
        console.error(`${request.params.id} seems to be nonexistent.`)
    } else {
        response.json(patchedItem)
    }
})

itemRouter.delete("/", async (_request, response) => {
    await Item.deleteMany({})
    return response.status(204).end()
})

module.exports = itemRouter
