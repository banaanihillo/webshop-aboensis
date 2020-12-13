import React, {useState, useEffect} from "react"
import LandingPage from "./components/LandingPage"
import ItemList from "./components/ItemList"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import {getAllItems} from "./services/itemService"

const App = () => {
    const [termsAccepted, acceptTerms] = useState(false)
    const [itemsForSale, setItemsForSale] = useState([])

    useEffect(() => {
        getAllItems()
            .then(responseData => {
                setItemsForSale(responseData)
            })
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
                    <Link to="/login"> Log in </Link>
                    <Link to="/signup"> Sign up </Link>
                </header>

                <main className="App-main">
                    <Switch>
                        <Route path="/items">
                            <ItemList
                                termsAccepted = {termsAccepted}
                                acceptTerms = {acceptTerms}
                                itemsForSale = {itemsForSale}
                            />
                        </Route>
                        <Route path="/login">
                            <LogIn />
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
