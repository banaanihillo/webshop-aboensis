const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    electronicMail: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
})

userSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("User", userSchema)
