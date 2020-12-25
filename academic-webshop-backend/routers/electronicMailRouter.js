const nodeMailer = require("nodemailer")
const electronicMailRouter = require("express").Router()

electronicMailRouter.post("/", async (request, response) => {
    const dummyAccount = await nodeMailer.createTestAccount()
    const commaSeparatedItems = request.body.itemNames.join(", ")

    const transporter = nodeMailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: dummyAccount.user,
            pass: dummyAccount.pass
        }
    })

    const sentMail = await transporter.sendMail({
        from: `${"Bananas Hillos"} <bananas@hillos.io>`,
        to: `${request.body.loggedIn.userName}@shop.aa`,
        subject: "Your purchase from Webshop Aboensis",
        text: `You have successfully purchased:
            ${commaSeparatedItems}
        `,
        html: `<div>
            This is your purchase confirmation.
            <br />
            Purchased thing(s):
            ${commaSeparatedItems}
            <br />
            Thank you for your purchase.
        </div>`
    })
    const mailPreview = nodeMailer.getTestMessageUrl(sentMail)
    return response.json({
        mailPreview
    })
})

module.exports = electronicMailRouter
