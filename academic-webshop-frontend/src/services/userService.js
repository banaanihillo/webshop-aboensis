import axios from "axios"
const address = "http://localhost:3001/users"

const createNewUser = async (newUser) => {

    const response = await axios.post(address, newUser)
    
    return response.data
}

export {
    createNewUser
}
