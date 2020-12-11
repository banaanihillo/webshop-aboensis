const express = require("express")
const app = express()
app.use(express.json())
const {v4: uniqueIdentificator} = require("uuid")

let dummyItems = [
    {
        "id": "banana",
        "name": "Scentful Sofa",
        "price": 350
    },
    {
        "id": "notbanana",
        "name": "Odourless Sofa",
        "price": 300
    },
    {
        "id": "definitelynotbanana",
        "name": "Healthy Fruit",
        "price": 1
    }
]

app.get("/ping", (_request, response) => {
    response.send("Pong")
})

app.get("/", (_request, response) => {
    response.send("Hello! You are currently at the root.")
})

app.get("/items", (_request, response) => {
    response.json(dummyItems)
})

app.post("/items", (request, response) => {
    if (!request.body.name || !request.body.price) {
        return response.status(400).json({
            error: "All items should have a name and a price."
        })
    }
    
    //let mongo handle this id though, once it has been set up
    const newIdentificator = uniqueIdentificator()

    const newItem = {
        id: newIdentificator,
        name: request.body.name,
        price: request.body.price,
        date: new Date()
    }

    dummyItems = dummyItems.concat(newItem)
    response.json(newItem)
})

app.get("/items/:id", (request, response) => {
    const matchedItem = dummyItems.find(
        item => item.id === request.params.id
    )
    if (!matchedItem) {
        response.status(404).send("Looks like that id does not exist.")
    } else {
        response.json(matchedItem)
    }
})

app.delete("/items/:id", (request, response) => {
    const filteredItems = dummyItems.filter(
        item => item.id !== request.params.id
    )
    console.log(`Successfully deleted ${request.params.id}.`)
    console.log(filteredItems)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Running the server on port ${PORT}.`)
})
