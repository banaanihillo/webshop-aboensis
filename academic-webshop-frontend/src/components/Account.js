import React, {useState} from "react"
import {changePassword} from "../services/userService"

const Account = (props) => {
    const {userid} = props
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordAgain, setNewPasswordAgain] = useState("")

    const submitNewPassword = async (event) => {
        event.preventDefault()
        //in a more realistic scenario:
        //find the user in the database,
        //compare their password hash to the oldPassword input,
        //bcrypt.compare(old password, ...)
        //and if it was not the same,
        //throw an error;
        //but no password shenanigans involved here,
        //so i guess the old password really does not matter
        
        if (!newPassword) {
            //show a notification instead of this error though
            throw new Error("The password should not be empty")
        } else {
            if (newPassword === newPasswordAgain) {
                await changePassword(userid, {
                    password: newPassword
                })
            } else {
                //also notification
                throw new Error("The password does not match")
            }
        }
    }

    return (
        <div className = "my-account">
            <form className = "my-account-form">
                <label htmlFor = "hiddenUserName"></label>
                <input
                    type = "text"
                    hidden
                    autoComplete = "username"
                    readOnly
                    id = "hiddenUserName"
                />
                <label htmlFor = "oldPasswordInput">
                    Old password
                </label>
                <input
                    type = "password"
                    required
                    autoComplete = "current-password"
                    id = "oldPasswordInput"
                    value = {oldPassword}
                    onChange = {({target}) => {
                        setOldPassword(target.value)
                    }}
                />
                <br />
                <label htmlFor = "newPasswordInput">
                    New password
                </label>
                <input
                    type = "password"
                    required
                    autoComplete = "new-password"
                    id = "newPasswordInput"
                    value = {newPassword}
                    onChange = {({target}) => {
                        setNewPassword(target.value)
                    }}
                />
                <br />
                <label htmlFor = "newPasswordAgain">
                    New password again
                </label>
                <input
                    type = "password"
                    required
                    autoComplete = "new-password"
                    id = "newPasswordAgain"
                    value = {newPasswordAgain}
                    onChange = {({target}) => {
                        setNewPasswordAgain(target.value)
                    }}
                />
                <br />
                <button
                    type = "submit"
                    onClick = {submitNewPassword}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Account
