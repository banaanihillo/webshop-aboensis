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
    itemsForSale: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    itemsSold: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    itemsBought: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
})
//
module.exports = mongoose.model("User", userSchema)
