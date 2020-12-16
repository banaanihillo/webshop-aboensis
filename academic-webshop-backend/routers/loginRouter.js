const jsonWebToken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const loginRouter = require("express").Router()
const User = require("../models/User")

loginRouter.post("/", async (request, response) => {
    const user = await User.findOne({
        userName: request.body.userName
    })
    if (!user) {
        return response.status(400).json({
            error: `The user ${request.body.userName} was not found.`
        })
    }

    const correctPassword = await bcrypt.compare(
        request.body.password,
        user.passwordHash
    )
    if (!correctPassword) {
        return response.status(401).json({
            error: "Incorrect password."
        })
    }

    const tokenUser = {
        userName: user.userName,
        _id: user._id
    }
    const token = jsonWebToken.sign(tokenUser, process.env.SECRET)

    response.status(200).send({
        token,
        userName: user.userName,
        _id: user._id
    })
})

module.exports = loginRouter
