const itemRouter = require("express").Router()
const Item = require("../models/Item")

itemRouter.get("/ping", (_request, response) => {
    response.send("Pong")
})

itemRouter.get("/", async (_request, response) => {
    const items = await Item.find({})
    response.json(items)
})

itemRouter.post("/", async (request, response) => {
    if (!request.body.name || !request.body.price) {
        return response.status(400).json({
            error: "All items should have a name and a price."
        })
    }

    const newItem =  new Item({
        name: request.body.name,
        price: request.body.price,
        date: new Date()
    })
    await newItem.save()
    response.json(newItem)
})

itemRouter.get("/:id", async (request, response) => {
    try {
        const matchedItem = await Item.findById(request.params.id)
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

module.exports = itemRouter
