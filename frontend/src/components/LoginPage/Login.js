import React from "react"
import Navbar from "../Navbar/Navbar"
import "../../styles/login.scss"

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login">
                <p className="login__header">Thats a secrect area</p>
                <form className="login__form">
                    <label>
                        Username
                        <input
                            type="text"
                            name="username"
                            value="{username}"
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value="{password}"
                        />
                    </label>
                    <input
                        type="submit"
                        value="sign in"
                    />
                </form>
            </div>
        </>
    )
}

export default Login
