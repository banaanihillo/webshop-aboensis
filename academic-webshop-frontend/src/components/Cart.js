import React from "react"
import {makeItemTransaction} from "../services/userService"
import {getItemsForSale} from "../services/itemService"

const Cart = (props) => {
    const {
        itemsInCart, setItemsInCart, userid, setItemsForSale
    } = props

    const removeFromCart = (id) => {
        const filteredCart = itemsInCart.filter(item => {
            return (item._id !== id)
        })
        setItemsInCart(filteredCart)
    }

    const handleItemTransaction = async (event) => {
        event.preventDefault()
        await makeItemTransaction(
            userid,
            itemsInCart
        )
        const responseData = await getItemsForSale()
        setItemsForSale(responseData)
        setItemsInCart([])
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
                    onClick = {() => setItemsInCart([])}
                >
                    Remove all items
                </button>
            </p>
        </div>
    )
}

export default Cart
