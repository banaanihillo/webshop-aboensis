import React, {useState} from "react"
import {logIn} from "../services/loginService"
import {setToken} from "../services/itemService"
import {useHistory} from "react-router-dom"

const LogIn = (props) => {
    const {setLoggedIn, showNotification} = props
    const history = useHistory()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await logIn({
                userName,
                password
            })
            if (!user) {
                showNotification(
                    `The user ${userName} could not be found.`,
                    "errorMessage"
                )
            } else {
                setLoggedIn(user)
                setToken(user.token)
                window.localStorage.setItem(
                    "currentlyLoggedIn",
                    JSON.stringify(user)
                )
                history.push("/")
                showNotification(`Welcome, ${user.userName}.`)
            }
        } catch (error) {
            showNotification(
                "Incorrect log-in credentials.",
                "errorMessage"
            )
        }
    }
    return (
        <div>
            <h2> Log in </h2>
            <form className = "login-form">
                <label htmlFor = "logInUserName"> User name </label>
                <input
                    type = "text"
                    id = "logInUserName"
                    value = {userName}
                    required
                    onChange = {({target}) => {
                        setUserName(target.value)
                    }}
                />
                <br />
                <label htmlFor = "logInPassword"> Password </label>
                <input
                    type = "password"
                    id = "logInPassword"
                    autoComplete = "on"
                    value = {password}
                    required
                    onChange = {({target}) => {
                        setPassword(target.value)
                    }}
                />
                <br />

                <button
                    onClick = {handleSubmit}
                    type = "submit"
                >
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LogIn
