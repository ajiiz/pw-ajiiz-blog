import React from "react"
import Logo from "../../assets/logo.png"
import "../../styles/navbar.scss"
import CustomLink from "./CustomLink"

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo"></img>
            <ul className="navbar__list">

            </ul>
        </div>
    )
}

export default Navbar
