const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    date: Date
})

itemSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Item", itemSchema)
