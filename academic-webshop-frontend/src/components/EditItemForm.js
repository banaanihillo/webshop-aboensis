import React, {useState} from "react"
import {editItem} from "../services/itemService"
import {useHistory, useParams} from "react-router-dom"

const EditItemForm = (props) => {
    const {
        itemsForSale,
        setItemsForSale,
        individualItem
    } = props

    const {id} = useParams()

    const [newPrice, setNewPrice] = useState(
        individualItem.price
    )
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const modifiedItem = await editItem(
            id,
            {
                price: newPrice
            }
        )
        setItemsForSale(itemsForSale.filter(item =>
            (item._id !== modifiedItem._id)
                ? item
                : modifiedItem
        ))
        history.push("/my-items")
    }

    return (
        <form className = "edit-item-form">
            <label htmlFor = "oldItemName">
                Name
            </label>
            <input
                disabled
                id = "oldItemName"
                value = {individualItem.name}
            />

            <label htmlFor = "editedPrice">
                New price
            </label>
            <input
                type = "number"
                id = "editedPrice"
                min = {0}
                max = {9000}
                value = {newPrice}
                onChange = {({target}) => {
                    setNewPrice(target.value)
                }}
            />

            <label htmlFor = "oldItemDescription">
                Description
            </label>
            <input
                disabled
                id = "oldItemDescription"
                value = {individualItem.description}
            />
            <button
                type = "submit"
                onClick = {handleSubmit}
            >
                Submit
            </button>
            <button
                type = "button"
                onClick = {() => history.push("/my-items")}
                className = "button-cancel"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditItemForm
