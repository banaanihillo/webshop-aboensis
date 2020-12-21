import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {getItemsForSale} from "../services/itemService"

const ItemList = (props) => {
    const {
        termsAccepted,
        acceptTerms,
        setItemsInCart,
        loggedIn,
        itemsInCart
    } = props

    const [myItemsExcluded, setMyItemsExcluded] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [currentPageItems, setCurrentPageItems] = useState([])

    useEffect(() => {
        getItemsForSale()
            .then(responseData => {
                const myItemsExcluded = responseData.filter(item => {
                    return (item.seller !== loggedIn._id)
                })
                setMyItemsExcluded(myItemsExcluded)
            })
    },
    [loggedIn])
    
    const itemsPerPage = 4
    const lastItemIndex = activePage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    let pageNumbers = []

    useEffect(() => {
        if (myItemsExcluded.length > 0) {
            setCurrentPageItems(myItemsExcluded.slice(
                firstItemIndex, lastItemIndex
            ))
        }
    },
    [myItemsExcluded, firstItemIndex, lastItemIndex])

    const handlePageChange = (event) => {
        setActivePage(event.target.value)
    }

    const generatePageNumbers = () => {
        for (
            let i = 1;
            i <= Math.ceil(myItemsExcluded.length / itemsPerPage);
            i++
        ) {
            pageNumbers.push(i)
        }
        return (
            <ul className = "pagination">
                {pageNumbers.map(pageNumber => {
                    return <li
                        key = {pageNumber}
                        value = {pageNumber}
                        onClick = {handlePageChange}
                    >
                        {pageNumber}
                    </li>
                })}
            </ul>
        )
    }

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
        if (myItemsExcluded.length < 1) {
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
                        {currentPageItems.map(item => {
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
                    {generatePageNumbers()}
                </div>
            )
        }
    }
}

export default ItemList
