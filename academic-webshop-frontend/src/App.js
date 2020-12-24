import React, {useState, useEffect} from "react"
import LandingPage from "./components/LandingPage"
import ItemList from "./components/ItemList"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import MyItems from "./components/MyItems"
import Cart from "./components/Cart"
import Search from "./components/Search"
import Account from "./components/Account"
import EditItemForm from "./components/EditItemForm"
import './App.css';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom"
import {
    getItemsForSale, setToken
} from "./services/itemService"
import cart from "./assets/cart-96x96.svg"

const App = () => {
    const [termsAccepted, acceptTerms] = useState(false)
    const [itemsForSale, setItemsForSale] = useState([])
    const [loggedIn, setLoggedIn] = useState({
        _id: null
    })
    const [itemsInCart, setItemsInCart] = useState([])
    const [filteredItems, setFilteredItems] = useState(null)
    
    useEffect(() => {
        getItemsForSale()
            .then(responseData => {
                setItemsForSale(responseData)
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

    const itemMatch = useRouteMatch("/my-items/:id")
    const individualItem = (itemMatch)
        ? itemsForSale.find(item => {
            return (item._id === itemMatch.params.id)
        })
        : null

    const ConditionalLinks = () => {
        if (loggedIn._id) {
            return (
                <span className = "App-header-links">
                    
                    <Link to="/shop"> Shop </Link>
                    <Link to="/my-items"> My items </Link>
                    <Link to="/account"> Account </Link>
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
                    
                    <Link to="/shop"> Shop </Link>
                    <Link to="/login"> Log in </Link>
                    <Link to="/signup"> Sign up </Link>
                </span>
            )
        }
    }

    return (

        <div className="App">
            
            <header className="App-header">
                <h1> Academic Webshop </h1>
                <Search
                    itemsForSale = {itemsForSale}
                    setFilteredItems = {setFilteredItems}
                />
                <ConditionalLinks />
            </header>

            <main className="App-main">
                <Switch>
                    <Route path="/account">
                        <Account
                            userid = {loggedIn._id}
                        />
                    </Route>
                    <Route path="/my-items/:id">
                        <EditItemForm
                            itemsForSale={itemsForSale}
                            setItemsForSale={setItemsForSale}
                            individualItem={individualItem}
                        />
                    </Route>
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
                            setItemsForSale = {setItemsForSale}
                            itemsForSale = {itemsForSale}
                        />
                    </Route>
                    <Route path="/shop">
                        <ItemList
                            termsAccepted = {termsAccepted}
                            acceptTerms = {acceptTerms}
                            loggedIn = {loggedIn}
                            itemsInCart = {itemsInCart}
                            setItemsInCart = {setItemsInCart}
                            filteredItems = {filteredItems}
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
                            setItemsForSale = {setItemsForSale}
                        />
                    </Route>
                </Switch>
            </main>
        </div>

    );
}

export default App;
