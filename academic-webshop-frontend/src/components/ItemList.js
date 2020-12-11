import React from "react"
import {Link} from "react-router-dom"

const ItemList = () => {
    const listOfItems = /*get from the server*/[]

    if (listOfItems.length < 1) {
        return (
            <div>
                Everything has been sold out.
                <br />
                <Link to="/"> Back to home page </Link>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    {listOfItems.map(item => {
                        return (
                            <li key = {item.id}>
                                {item.name} - {item.price}
                            </li>
                        )
                    })}
                </ul>
                <br />
                <Link to="/"> Back to home page </Link>
            </div>
        )
    }
}

export default ItemList
