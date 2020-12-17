import React, {useState} from "react"
import {createNewItem} from "../services/itemService"

const AddItemForm = (props) => {
    const {toggleItemForm, itemsForSale, setItemsForSale} = props
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        //and a notification
        const newItem = {
            name: name,
            price: price,
            description: description
        }
        const responseData = await createNewItem(newItem)
        const updatedItems = itemsForSale.concat(responseData)
        setItemsForSale(updatedItems)
        //also perhaps close the form, or not
        toggleItemForm(false)
    }

    return (
        <form className = "add-item-form">
                    <label htmlFor = "newItemName"> Name: </label>
                    <input
                        type = "text"
                        id = "newItemName"
                        value = {name}
                        required
                        placeholder = "Item name"
                        onChange = {({target}) => {
                            setName(target.value)
                        }}
                    />

                    <br />
                    <label htmlFor = "newItemPrice"> Price: </label>
                    <input
                        type = "number"
                        min = {1}
                        max = {9000}
                        id = "newItemPrice"
                        value = {price}
                        required
                        onChange = {({target}) => {
                            setPrice(Number(target.value))
                        }}
                    />
                    
                    <br />
                    <label htmlFor = "newItemDescription">
                        Description:
                    </label>
                    <textarea
                        rows = {5}
                        id = "newItemDescription"
                        value = {description}
                        placeholder = "Optional description"
                        onChange = {({target}) => {
                            setDescription(target.value)
                        }}
                    />
                    
                    <br />
                    <button
                        type = "submit"
                        onClick = {handleSubmit}
                    >
                        Submit
                    </button>
                    <br />
                    <button
                        type = "button"
                        onClick = {() => toggleItemForm(false)}
                        className = "button-cancel"
                    >
                        Cancel
                    </button>
                </form>
    )
}

export default AddItemForm
