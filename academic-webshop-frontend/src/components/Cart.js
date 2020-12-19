import React from "react"
import {makeItemTransaction} from "../services/userService"

const Cart = (props) => {
    const {itemsInCart, setItemsInCart, userid} = props

    const removeFromCart = (id) => {
        const filteredCart = itemsInCart.filter(item => {
            return (item._id !== id)
        })
        setItemsInCart(filteredCart)
    }

    const handleItemTransaction = async (event) => {
        event.preventDefault()
        console.log(itemsInCart)
        //so the method needs the item identifiers,
        //and also the seller identifiers,
        //and the currently logged in user identifier
        //and update all the items sold, bought, and for sale
        const responseData = await makeItemTransaction(
            userid,
            itemsInCart
        )
        //set this to currentlyLoggedIn itemsBought
        console.log(responseData.updatedBuyer)
        //set this to? everywhere?
        console.log(responseData.updatedSellers)
        //refetch all types of items?
        console.log(responseData.updatedItems)
    }

    if (itemsInCart.length < 1) {
        return (
            <div>
                Your cart is empty.
            </div>
        )
    }
    return (
        <div>
            <ul className = "cart-container">
                {itemsInCart.map(item => 
                    <li key = {item._id}>
                        Item: {item.name}
                        <br />
                        Price: {item.price}
                        <br />
                        <button
                            onClick = {() => removeFromCart(item._id)}
                            className = "button-cancel"
                        >
                            Remove from cart
                        </button>
                    </li>
                )}
            </ul>
            <h3> Total </h3>
            {itemsInCart.map(item => item.price)
                .reduce((sum, summand) => {
                    return sum + summand
                },
                0
            )} €
            <br />
            <p className = "cart-buttons">
                <button
                    type = "submit"
                    onClick = {handleItemTransaction}
                >
                    Check out
                </button>
                <button
                    type = "button"
                    className = "button-cancel"
                    onClick = {() => console.log("Cart emptied")}
                >
                    Remove all items
                </button>
            </p>
        </div>
    )
}

export default Cart
