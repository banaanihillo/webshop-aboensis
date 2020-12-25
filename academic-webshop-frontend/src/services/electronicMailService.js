import axios from "axios"
const address = "http://localhost:3001/electronic-mail"

const sendElectronicMail = async (loggedIn, itemNames) => {
    const requestBody = {
        loggedIn: loggedIn,
        itemNames: itemNames
    }
    const response = await axios.post(address, requestBody)
    console.log(response.data)
    return response.data
}

export {
    sendElectronicMail
}
