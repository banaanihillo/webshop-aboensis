import React, {useState} from "react"
import {logIn} from "../services/loginService"
import {useHistory} from "react-router-dom"

const LogIn = (props) => {
    const {setLoggedIn} = props
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
                console.error(`The user ${userName} was not found.`)
            } else {
                setLoggedIn(user)
                //show a notification of sorts here
                //and add the token into local storage or such
                history.push("/items")
            }
        } catch (error) {
            console.error("Unauthorized - incorrect credentials.")
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
                    onChange = {({target}) => {
                        setPassword(target.value)
                    }}
                />
                <br />

                <button onClick = {handleSubmit}>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LogIn
