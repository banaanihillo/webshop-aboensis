import axios from "axios"
const address = "http://localhost:3001/login"

const logIn = async (logInCredentials) => {
    const response = await axios.post(address, logInCredentials)
    //so this response data includes the token,
    //and it should be stored somewhere to keep the user logged in
    return response.data
}

export {
    logIn
}
