const userRouter = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")

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
        const foundUser = await User.findById(request.params.id)
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

module.exports = userRouter
