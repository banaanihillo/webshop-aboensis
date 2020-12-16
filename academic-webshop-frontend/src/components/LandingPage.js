import React from "react"
import {Link} from "react-router-dom"

const LandingPage = (props) => {
    const {termsAccepted, acceptTerms, itemsForSale} = props

    return (
        <div className = "landing-page-container">
            <section>
                Items currently for sale: {itemsForSale.length}
            </section>
            <section>
                Click on the button below to populate the database
                <br />
                <button onClick = {() => console.log("Populating!")}>
                    Populate
                </button>
            </section>
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
