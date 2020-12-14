import React, {useState, useEffect} from "react"
import LandingPage from "./components/LandingPage"
import ItemList from "./components/ItemList"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import MyItems from "./components/MyItems"
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import {getAllItems, setToken} from "./services/itemService"

const App = () => {
    const [termsAccepted, acceptTerms] = useState(false)
    const [itemsForSale, setItemsForSale] = useState([])
    const [loggedIn, setLoggedIn] = useState({
        id: null
    })

    useEffect(() => {
        getAllItems()
            .then(responseData => {
                setItemsForSale(responseData)
            })
    },
    [])

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

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1> Academic Webshop </h1>
                    <span className = "search-bar">
                        Search lorem here ipsum placeholder
                    </span>
                    <Link to="/"> Home </Link>
                    {loggedIn.id
                        ? <span>
                            <Link to="/my-items"> My items </Link>
                            <Link to="/" onClick = {() => {
                                window.localStorage.removeItem(
                                    "currentlyLoggedIn"
                                )
                                setLoggedIn({
                                    userName: null,
                                    id: null
                                })
                                setToken(null)
                                //and a notification, perhaps
                            }}>
                                Log out
                            </Link>
                        </span>
                        : <span>
                            <Link to="/login"> Log in </Link>
                            <Link to="/signup"> Sign up </Link>
                        </span>
                    }
                </header>

                <main className="App-main">
                    <Switch>
                        <Route path="/my-items">
                            <MyItems
                                userid = {loggedIn.id}
                            />
                        </Route>
                        <Route path="/items">
                            <ItemList
                                termsAccepted = {termsAccepted}
                                acceptTerms = {acceptTerms}
                                itemsForSale = {itemsForSale}
                                loggedIn = {loggedIn}
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
                            />
                        </Route>
                    </Switch>
                </main>

                <footer className="App-footer">
                    I am legally obligated to tell you:
                    <strong> this is not a real webshop. </strong>
                    All rights reserved.
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
