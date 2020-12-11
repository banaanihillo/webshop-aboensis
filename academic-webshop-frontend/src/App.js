import LandingPage from "./components/LandingPage"
import ItemList from "./components/ItemList"
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1> Welcome to Academic Webshop! </h1>
                </header>

                <main className="App-main">
                    <Switch>
                        <Route path="/items">
                            <ItemList />
                        </Route>
                        <Route path="/">
                            <LandingPage />
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
