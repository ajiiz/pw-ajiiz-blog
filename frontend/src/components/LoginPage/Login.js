import React from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import "../../styles/login.scss"

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="login__wrapper">
                    <p className="login__wrapper__header">Thats a secrect area</p>
                    <form className="login__wrapper__form">
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
                <div className="background-triangle background-triangle--login"></div>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Login
