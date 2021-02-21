import React, { useState, useEffect, useRef } from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import { Power1, gsap } from "gsap"
import "../../styles/login.scss"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let container = useRef(null)

    const handleAnimationClose = () => {

    }

    return (
        <>
            <Navbar handleAnimationClose={handleAnimationClose} />
            <div className="login" ref={el => container = el}>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="login__wrapper">
                    <p className="login__wrapper__header">Thats a secrect area</p>
                    <form className="login__wrapper__form">
                        <p className="login__wrapper__form__name">
                            Username
                        </p>
                        <input
                            className="login__wrapper__form__input"
                            type="text"
                            placeholder="username"
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <p className="login__wrapper__form__name">
                            Password
                        </p>
                        <input
                            className="login__wrapper__form__input"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            className="login__wrapper__form__submit"
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
