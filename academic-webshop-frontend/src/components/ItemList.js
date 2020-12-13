import React from "react"
//

const ItemList = (props) => {
    const {termsAccepted, acceptTerms, itemsForSale} = props

    if (!termsAccepted) {
        return (
            <div>
                Looks like you have not accepted the legal agreement yet.
                <br />
                By clicking below, you agree to the terms and conditions.
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
                    Everything has been sold out.

                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        {itemsForSale.map(item => {
                            return (
                                <li key = {item.id}>
                                    {item.name} - {item.price}
                                </li>
                            )
                        })}
                    </ul>

                </div>
            )
        }
    }
}

export default ItemList
