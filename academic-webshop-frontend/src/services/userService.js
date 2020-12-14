import axios from "axios"
const address = "http://localhost:3001/users"

const createNewUser = async (newUser) => {

    const response = await axios.post(address, newUser)
    
    return response.data
}

const getUser = async (userid) => {
    const response = await axios.get(`${address}/${userid}`)
    return response.data
}

export {
    createNewUser,
    getUser
}
