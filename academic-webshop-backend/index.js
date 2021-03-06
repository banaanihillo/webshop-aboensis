const express = require("express")
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const itemRouter = require("./routers/itemRouter")
const userRouter = require("./routers/userRouter")
const loginRouter = require("./routers/loginRouter")
const electronicMailRouter = require("./routers/electronicMailRouter")
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

app.use("/backend/items", itemRouter)
app.use("/backend/users", userRouter)
app.use("/backend/log-in", loginRouter)
app.use("/backend/electronic-mail", electronicMailRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Running the server on port ${PORT}.`)
})
