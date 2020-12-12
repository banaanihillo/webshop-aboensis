const express = require("express")
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const Item = require("./models/Item")
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("build"))

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Successfully connected to Mongo.")
    })
    .catch((error) => {
        console.error(`Could not connect to Mongo: ${error}`)
    })

app.get("/ping", (_request, response) => {
    response.send("Pong")
})

app.get("/", (_request, response) => {
    response.send("Hello! You are currently at the root.")
})

app.get("/items", async (_request, response) => {
    const items = await Item.find({})
    response.json(items)
})

app.post("/items", async (request, response) => {
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

app.get("/items/:id", async (request, response) => {
    try {
        const matchedItem = await Item.findById(request.params.id)
        if (!matchedItem) {
            return response.status(404).send("That id does not exist.")
        } else {
            response.json(matchedItem)
        }
    } catch (error) {
        console.log(`That id is in the wrong format: ${error}`)
        return response.status(500).send({error: "Malformed id"})
    }
})

app.delete("/items/:id", async (request, response) => {
    const deletedItem = await Item.findByIdAndDelete(request.params.id)
    if (!deletedItem) {
        console.error(`Looks like ${request.params.id} is wrong.`)
    } else {
        console.log(`Successfully deleted ${request.params.id}.`)
        response.status(204).end()
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Running the server on port ${PORT}.`)
})
