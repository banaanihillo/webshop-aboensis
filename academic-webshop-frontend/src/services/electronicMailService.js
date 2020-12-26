import axios from "axios"
const address = "/electronic-mail"

const sendElectronicMail = async (loggedIn, itemNames) => {
    const requestBody = {
        loggedIn: loggedIn,
        itemNames: itemNames
    }
    const response = await axios.post(address, requestBody)
    
    return response.data
}

export {
    sendElectronicMail
}
