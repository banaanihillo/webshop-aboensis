import React, {useState} from "react"
import {createNewUser} from "../services/userService"
import {useHistory} from "react-router-dom"

const SignUp = (props) => {
    const {showNotification} = props
    const history = useHistory()
    const [electronicMail, setElectronicMail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (password !== passwordAgain) {
            showNotification(
                "The passwords inputs do not match.",
                "errorMessage"
            )
        } else {
            createNewUser({
                electronicMail,
                userName,
                password
            })
            history.push("/login")
            showNotification(
                `You have successfully signed up.
                A nonexistent confirmation mail has been sent.
                Make sure you check that out, or don't.`
            )
        }
    }

    return (
        <div>
            <h2> Sign up </h2>
            <form className = "signup-form">
                <label htmlFor = "electronicMailInput">
                    Electronic mail
                </label>
                <input
                    type = "email"
                    id = "electronicMailInput"
                    value = {electronicMail}
                    required
                    onChange = {({target}) =>
                        setElectronicMail(target.value)
                    }
                />
                <br />

                <label htmlFor = "userNameInput"> User name </label>
                <input
                    type = "text"
                    id = "userNameInput"
                    autoComplete = "username"
                    value = {userName}
                    required
                    onChange = {({target}) =>
                        setUserName(target.value)
                    }
                />
                <br />

                <label htmlFor = "passwordInput"> Password </label>
                <input
                    type = "password"
                    id = "passwordInput"
                    autoComplete = "new-password"
                    value = {password}
                    required
                    onChange = {({target}) =>
                        setPassword(target.value)
                    }
                />
                <br />

                <label htmlFor = "passwordInputAgain">
                    Password again
                </label>
                <input
                    type = "password"
                    id = "passwordInputAgain"
                    autoComplete = "new-password"
                    value = {passwordAgain}
                    required
                    onChange = {({target}) =>
                        setPasswordAgain(target.value)
                    }
                />
                <br />

                <button
                    type = "submit"
                    onClick = {handleSubmit}
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUp
