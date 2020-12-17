import React from "react"

const Cart = (props) => {
    const {itemsInCart, setItemsInCart} = props

    const removeFromCart = (id) => {
        const filteredCart = itemsInCart.filter(item => {
            return (item._id !== id)
        })
        setItemsInCart(filteredCart)
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
                    onClick = {() => console.log("Checking out")}
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
