import React from "react"
import {Link} from "react-router-dom"

const ItemList = (props) => {
    const {
        termsAccepted,
        acceptTerms,
        itemsForSale,
        loggedIn,
        itemsInCart,
        setItemsInCart
    } = props

    const addToCart = (addedItem) => {
        const alreadyInCart = itemsInCart.find(item => {
            return (item._id === addedItem._id)
        })
        if (alreadyInCart) {
            console.log("Already in your cart.")
        } else {
            setItemsInCart(itemsInCart.concat(addedItem))   
        }
    }

    if (!termsAccepted) {
        return (
            <div>
                Looks like you have not accepted the legal agreement.
                <br />
                By clicking below,
                you agree to the terms and conditions.
                <br />
                <button onClick = {() => {acceptTerms(true)}}>
                    Agree
                </button>
            </div>
        )
    } else {
        if (itemsForSale.length < 1) {
            return (
                <div>
                    Nothing to see here.
                </div>
            )
        } else {
            return (
                <div>
                    {loggedIn._id
                        ? <span> Logged in: {loggedIn.userName} </span>
                        : <span>
                            You are not logged in. <br />
                            Sales and purchases are reserved
                            for registered users only. <br />
                            <Link to="/login"> Log in here </Link>
                        </span>
                    }
                    <ul className = "item-list-container">
                        {itemsForSale.map(item => {
                            return <li key = {item._id}>
                                Item: {item.name} <br />
                                Price: {item.price} <br />
                                {item.description} <br />
                                Posted on {item.date} <br />
                                {!loggedIn._id
                                    ? null
                                    : <button onClick = {() => {
                                        addToCart(item)
                                    }}>
                                        Add to cart
                                    </button>
                                }
                            </li>
                        })}
                    </ul>

                </div>
            )
        }
    }
}

export default ItemList
