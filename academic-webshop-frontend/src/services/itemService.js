import axios from "axios"
const address = "http://localhost:3001/items"

let token = ""
const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getAllItems = async () => {
    const response = await axios.get(address)
    return response.data
}

const createNewItem = async (newItem) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.post(address, newItem, config)
    return response.data
}

const getItem = async (itemid) => {
    const response = await axios.get(`${address}/${itemid}`)
    return response.data
}

export {
    getAllItems,
    createNewItem,
    getItem,
    setToken
}
