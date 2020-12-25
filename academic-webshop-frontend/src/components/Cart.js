import React, {useEffect} from "react"
import {makeItemTransaction} from "../services/userService"
import {getItemsForSale} from "../services/itemService"
import {sendElectronicMail} from "../services/electronicMailService"

const Cart = (props) => {
    const {
        itemsInCart,
        setItemsInCart,
        loggedIn,
        setItemsForSale,
        itemsForSale
    } = props

    useEffect(() => {
        getItemsForSale()
            .then(responseData => {
                setItemsForSale(responseData)
            })
    },
    [setItemsForSale])

    const removeFromCart = (id) => {
        const filteredCart = itemsInCart.filter(item => {
            return (item._id !== id)
        })
        setItemsInCart(filteredCart)
    }

    const checkAvailability = async () => {
        const refetchedItems = await getItemsForSale()

        const inStock = itemsInCart.every(itemInCart => {
            const itemFound = refetchedItems.some(refetchedItem => {
                return (refetchedItem._id === itemInCart._id)
            })
            if (!itemFound) {
                const unavailableItem = {
                    ...itemInCart,
                    forSale: false
                }
                const updatedItems = itemsInCart.map(item => {
                    return (item._id === unavailableItem._id)
                        ? unavailableItem
                        : item
                })
                const unavailableItemsRemoved = updatedItems
                    .filter(recheckedItem => {
                        return (recheckedItem.forSale === true)
                    })
                setItemsInCart(unavailableItemsRemoved)
            }
            return itemFound
        })
        return inStock
    }

    const checkPricing = () => {
        let itemsHaveChanged = false
        const changedPrices = itemsInCart.some(cartItem => {
            const itemToCompare = itemsForSale.find(itemForSale => {
                return (itemForSale._id === cartItem._id)
            })
            if (itemToCompare.price !== cartItem.price) {
                const changedCartItem = {
                    ...cartItem,
                    price: itemToCompare.price
                }
                const changedItems = itemsInCart.map(item => {
                    return (item._id === itemToCompare._id)
                        ? changedCartItem
                        : item
                })
                setItemsInCart(changedItems)
                itemsHaveChanged = true
                return itemsHaveChanged
            }
            return itemsHaveChanged
        })
        return changedPrices
    }

    const handleItemTransaction = async (event) => {
        event.preventDefault()

        const inStock = await checkAvailability()
        if (!inStock) {
            window.alert(`
                An item in your cart is no longer in stock.
                The item has now been removed from your cart.
            `)
            return
        }

        const changedPrices = await checkPricing()
        if (changedPrices) {
            window.alert(`
                The price of an item in the cart has changed.
                The transaction has been halted,
                and the updated price is now shown.
            `)
            return
        }

        await makeItemTransaction(
            loggedIn._id,
            itemsInCart
        )
        const responseData = await getItemsForSale()
        setItemsForSale(responseData)

        const itemNames = itemsInCart.map(item => item.name)
        const mailSent = await sendElectronicMail(loggedIn, itemNames)
        console.log(mailSent.mailPreview)
        setItemsInCart([])
        console.log("Transaction successful.")
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
