import axios from "axios"
const address = "http://localhost:3001/items"

let token = ""
const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getItemsForSale = async () => {
    const response = await axios.get(`${address}/for-sale`)
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

const populateItems = async (items) => {
    const response = await axios.post(`${address}/populate`, items)
    return response.data
}

export {
    getItemsForSale,
    createNewItem,
    getItem,
    setToken,
    populateItems
}
