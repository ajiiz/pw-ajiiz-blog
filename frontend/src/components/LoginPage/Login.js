import React, { useState } from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import "../../styles/login.scss"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Navbar />
            <div className="login">
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="login__wrapper">
                    <p className="login__wrapper__header">Thats a secrect area</p>
                    <form className="login__wrapper__form">
                        <p className="login__wrapper__form__name">
                            Username
                        </p>
                        <input
                            type="text"
                            name="username"
                            value="{username}"
                        />
                        <p className="login__wrapper__form__name">
                            Password
                        </p>
                        <input
                            type="password"
                            name="password"
                            value="{password}"
                        />
                        <input
                            type="submit"
                            value="sign in"
                        />
                    </form>
                </div>
                <div className="background-triangle background-triangle--login"></div>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Login
