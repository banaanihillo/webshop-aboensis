import axios from "axios"
const address = "http://localhost:3001/items"

const getAllItems = async () => {
    const response = await axios.get(address)
    return response.data
}

const createNewItem = async (newItem) => {
    const response = await axios.post(address, newItem)
    //the backend now requires an authorization header,
    //so that should be part of the arguments here
    return response.data
}

export {
    getAllItems,
    createNewItem
}
