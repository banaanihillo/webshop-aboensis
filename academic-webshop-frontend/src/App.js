import React, {useState, useEffect} from "react"
import LandingPage from "./components/LandingPage"
import ItemList from "./components/ItemList"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import MyItems from "./components/MyItems"
import Cart from "./components/Cart"
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import {getItemsForSale, setToken} from "./services/itemService"
import cart from "./assets/cart-96x96.svg"

const App = () => {
    const [termsAccepted, acceptTerms] = useState(false)
    const [itemsForSale, setItemsForSale] = useState([])
    const [loggedIn, setLoggedIn] = useState({
        _id: null
    })
    const [itemsInCart, setItemsInCart] = useState([])

    useEffect(() => {
        getItemsForSale()
            .then(responseData => {
                const myItemsExcluded = responseData.filter(item => {
                    return (item.seller !== loggedIn._id)
                })
                setItemsForSale(myItemsExcluded)
            })
    },
    [loggedIn])

    useEffect(() => {
        const currentlyLoggedIn = window.localStorage.getItem(
            "currentlyLoggedIn"
        )
        if (currentlyLoggedIn) {
            const user = JSON.parse(currentlyLoggedIn)
            setLoggedIn(user)
            setToken(user.token)
        }
    },
    [])

    const ConditionalLinks = () => {
        if (loggedIn._id) {
            return (
                <span className = "App-header-links">
                    <Link to="/"> Home </Link>
                    <Link to="/shop"> Shop </Link>
                    <Link to="/my-items"> My items </Link>
                    <Link to="/" onClick={() => {
                        window.localStorage.removeItem(
                            "currentlyLoggedIn"
                        )
                        setLoggedIn({
                            userName: null,
                            _id: null
                        })
                        setToken(null)
                        //and a notification, perhaps
                    }}>
                        Log out
                    </Link>
                    <Link to="/shop/cart">
                        <img
                            src = {cart}
                            alt = "Cart"
                            style = {{
                                height: "32px",
                                width: "32px"
                            }}
                            
                        />
                    </Link>
                </span>
            )
        } else {
            return (
                <span className = "App-header-links">
                    <Link to="/"> Home </Link>
                    <Link to="/shop"> Shop </Link>
                    <Link to="/login"> Log in </Link>
                    <Link to="/signup"> Sign up </Link>
                </span>
            )
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                
                <header className="App-header">
                    <h1> Academic Webshop </h1>
                    <span className = "App-header-search-bar">
                        Search lorem here ipsum placeholder
                    </span>
                    <ConditionalLinks />
                </header>

                <main className="App-main">
                    <Switch>
                        <Route path="/my-items">
                            <MyItems
                                userid = {loggedIn._id}
                                itemsForSale = {itemsForSale}
                                setItemsForSale = {setItemsForSale}
                            />
                        </Route>
                        <Route path="/shop/cart">
                            <Cart
                                itemsInCart = {itemsInCart}
                                setItemsInCart = {setItemsInCart}
                                userid = {loggedIn._id}
                            />
                        </Route>
                        <Route path="/shop">
                            <ItemList
                                termsAccepted = {termsAccepted}
                                acceptTerms = {acceptTerms}
                                itemsForSale = {itemsForSale}
                                loggedIn = {loggedIn}
                                itemsInCart = {itemsInCart}
                                setItemsInCart = {setItemsInCart}
                            />
                        </Route>
                        <Route path="/login">
                            <LogIn setLoggedIn = {setLoggedIn} />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/">
                            <LandingPage
                                termsAccepted = {termsAccepted}
                                acceptTerms = {acceptTerms}
                                itemsForSale = {itemsForSale}
                                setLoggedIn = {setLoggedIn}
                                setToken = {setToken}
                            />
                        </Route>
                    </Switch>
                </main>


            </div>
        </BrowserRouter>
    );
}

export default App;
