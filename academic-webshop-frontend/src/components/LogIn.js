import React, {useState} from "react"

const LogIn = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        //handleLogin here
        //also some kind of notification whether successful or not
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
