import axios from "axios"
const address = "/users"

const createNewUser = async (newUser) => {

    const response = await axios.post(address, newUser)
    
    return response.data
}

const getUser = async (userid) => {
    const response = await axios.get(`${address}/${userid}`)
    return response.data
}

const makeItemTransaction = async (userid, items) => {

    const response = await axios.patch(`${address}/${userid}`, items)
    
    return response.data
}

const populateUsers = async (users) => {
    const response = await axios.post(`${address}/populate`, users)
    return response.data
}

const getPopulatedUsers = async (userNames) => {
    const responseOne = await axios.get(
        `${address}/username/${userNames[0]}`
    )
    const responseTwo = await axios.get(
        `${address}/username/${userNames[1]}`
    )
    const responseThree = await axios.get(
        `${address}/username/${userNames[2]}`
    )
    const response = {
        1: responseOne.data[0],
        2: responseTwo.data[0],
        3: responseThree.data[0]
    }
    return response
}

const postPopulatedItems = async (items) => {
    const response = await axios.post(
        `${address}/populated-items`,
        items
    )
    return response.data
}

const changePassword = async (id, newPassword) => {
    const response = await axios.put(
        `${address}/${id}`,
        newPassword
    )
    return response.data
}

export {
    createNewUser,
    getUser,
    makeItemTransaction,
    populateUsers,
    getPopulatedUsers,
    postPopulatedItems,
    changePassword
}
