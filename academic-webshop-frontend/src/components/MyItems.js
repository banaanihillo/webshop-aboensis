import React, {useEffect, useState} from "react"
import {getUser} from "../services/userService"

const MyItems = (props) => {
    const {userid} = props

    const [myItems, setMyItems] = useState({
        "Items for sale": [

        ],
        "Items sold": [

        ],
        "Items bought": [

        ]
    })

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
    [userid])

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
                        return <li key = {item.id}>
                            Item: {item.name} <br />
                            Price: {item.price}
                        </li>
                    })}
                </span>
            )
        }
        return itemListings
    }

    return (
        <div>
            <ul className = "my-items-container">
                {getItems()}
            </ul>
        </div>
    )
}

export default MyItems
