import React from "react"

const Notification = (props) => {
    const {message, errorMessage} = props

    if (!message && !errorMessage) {
        return (
            <span className = "notification-empty"></span>
        )
    } else {
        if (errorMessage) {
            return (
                <span className = "notification-error-message">
                    {errorMessage}
                </span>
            )
        } else {
            return (
                <span className = "notification-message">
                    {message}
                </span>
            )
        }
    }
}

export default Notification
