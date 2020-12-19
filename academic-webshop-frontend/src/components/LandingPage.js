import React, {useState} from "react"
import {Link} from "react-router-dom"
import {
    populateUsers, getPopulatedUsers, postPopulatedItems
} from "../services/userService"
import {
    populateItems, getItemsForSale
} from "../services/itemService"

const LandingPage = (props) => {
    const {
        termsAccepted,
        acceptTerms,
        itemsForSale,
        setLoggedIn,
        setToken
    } = props

    const [databasePopulated, setDatabasePopulated] = useState(false)

    const commitPopulation = async () => {
        window.localStorage.removeItem(
            "currentlyLoggedIn"
        )
        setLoggedIn({
            userName: null,
            _id: null
        })
        setToken(null)
        let usersToPopulate = [1, 2, 3, 4, 5, 6]
        usersToPopulate.forEach((value, index) => 
            usersToPopulate[index] = {
                userName: `testuser${value}`,
                password: `pass${value}`,
                electronicMail: `testuser${value}@shop.aa`
            }
        )
        await populateUsers(usersToPopulate)

        const sellers = await getPopulatedUsers([
            "testuser1", "testuser2", "testuser3"
        ])
        let itemsToPopulate = []
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 10; j++) {
                itemsToPopulate.push({
                    name: `seller${i}-item${j}`,
                    price: i + j,
                    forSale: true,
                    seller: {
                        userName: `testuser${i}`,
                        _id: sellers[i]._id
                    }
                })
            }
        }
        await populateItems(itemsToPopulate)
        
        const itemsForSale = await getItemsForSale()
        console.log(itemsForSale)
        const updatedUsers = await postPopulatedItems(itemsForSale)
        console.log(updatedUsers)
        setDatabasePopulated(true)
    }

    return (
        <div className = "landing-page-container">
            <section>
                Items currently for sale: {itemsForSale.length}
            </section>
            {databasePopulated
                ? <section> Database successfully populated. </section>
                : <section>
                    Click on the button below to populate the database
                    <br />
                    <button onClick = {() => commitPopulation()}>
                        Populate
                    </button>
                </section>
            }
            <section>
                By clicking on the button below,
                you agree to our
                <em> intentionally ambiguous </em>
                terms and conditions.
                <br />
                <button onClick = {() => {acceptTerms(true)}}>
                    Agree
                </button>
                {!termsAccepted
                    ?
                        <div>
                            You must accept the terms and conditions.
                        </div>
                    :
                        <div>
                            <Link to="/shop">
                                Items for sale
                            </Link>
                        </div>
                }
            </section>
        </div>
    )
}

export default LandingPage
