import axios from "axios"
const address = "/backend/log-in"

const logIn = async (logInCredentials) => {
    const response = await axios.post(address, logInCredentials)
    //so this response data includes the token,
    //and it should be stored somewhere to keep the user logged in
    return response.data
}

export {
    logIn
}
