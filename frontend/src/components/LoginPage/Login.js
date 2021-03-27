import React, { useState, useEffect, useRef } from "react"
import { Power1, gsap } from "gsap"
import Navbar from "../Navbar/Navbar"

import BannerDark from "../../assets/banner-dark.svg"
import "../../styles/login.scss"

const Login = () => {

    const [formData, setFormData] = useState({ username: "", password: ""})

    let container = useRef(null)

    const handleAnimationClose = () => {
        gsap.to(container.children[1].children[1].children, {duration: .5, opacity: 0, y: "-30", stagger: 0.2, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[0], {delay: 1, duration: .6, opacity: 0, y: "-30", ease: Power1.easeInOut})
        gsap.to(container, {delay: 1.3, duration: .4, opacity: 0, ease: Power1.easeInOut})
    }

    useEffect(() => {
        gsap.to(container.children[1], {delay: .4, duration: .6, opacity: 1, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[0], {delay: .7, duration: .6, opacity: 1, y: 0, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[1].children, {delay: 1.2, duration: .5, opacity: 1, y: 0, stagger: 0.3, ease: Power1.easeInOut})
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value })
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
                            className="input-text login__wrapper__form__input"
                            type="text"
                            placeholder="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <p className="login__wrapper__form__name">
                            Password
                        </p>
                        <input
                            className="input-text login__wrapper__form__input"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            className="input-submit login__wrapper__form__submit"
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
