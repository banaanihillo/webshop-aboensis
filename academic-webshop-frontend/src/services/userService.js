import axios from "axios"
const address = "http://localhost:3001/users"

const createNewUser = async (newUser) => {
    console.log("New user: ", newUser)
    const response = await axios.post(address, newUser)
    console.log(response)
    return response.data
}

export {
    createNewUser
}
