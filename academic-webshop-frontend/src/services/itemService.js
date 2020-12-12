import axios from "axios"
const address = "http://localhost:3001/items"

const getAllItems = async () => {
    const response = await axios.get(address)
    return response.data
}

const createNewItem = async (newItem) => {
    const response = await axios.post(address, newItem)
    console.log("Posting a new item")
    console.log(response)
    return response.data
}

export {
    getAllItems,
    createNewItem
}
