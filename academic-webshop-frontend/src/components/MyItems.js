import React, {useEffect, useState} from "react"
import {getUser} from "../services/userService"
import AddItemForm from "./AddItemForm"
import {Link} from "react-router-dom"

const MyItems = (props) => {
    const {userid, itemsForSale, setItemsForSale} = props

    const [myItems, setMyItems] = useState({
        "Items for sale": [

        ],
        "Items sold": [

        ],
        "Items bought": [

        ]
    })
    const [itemFormOpen, toggleItemForm] = useState(false)

    useEffect(() => {
        if (!userid) {
            return "No data to fetch yet"
        }
        getUser(userid)
            .then((responseData) => {
                setMyItems({
                    "Items for sale": responseData.itemsForSale,
                    "Items sold": responseData.itemsSold,
                    "Items bought": responseData.itemsBought
                })
            })
    },
    [userid, itemsForSale])

    if (!userid) {
        return (
            <div> What are you doing here </div>
        )
    }

    const getItems = () => {
        let itemListings = []
        for (const [key, value] of Object.entries(myItems)) {
            itemListings.push(
                <span key = {key}>
                    <h2> {key} </h2>
                    {value.map(item => {
                        return <li key = {item._id}>
                            Item: {item.name} <br />
                            Price: {item.price} <br />
                            {item.description} <br />
                            <Link to={`/my-items/${item._id}`}>
                                Edit
                            </Link>
                        </li>
                    })}
                </span>
            )
        }
        return itemListings
    }

    return (
        <div>
            {!itemFormOpen
                ? <button onClick = {() => toggleItemForm(true)}>
                    Add an item
                </button>
                : <AddItemForm
                    toggleItemForm = {toggleItemForm}
                    itemsForSale = {itemsForSale}
                    setItemsForSale = {setItemsForSale}
                />
            }
            <ul className = "my-items-container">
                {getItems()}
            </ul>
        </div>
    )
}

export default MyItems
