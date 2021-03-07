import React from "react"
import CustomLink from "./CustomLink"

import Logo from "../../assets/logo.png"
import "../../styles/navbar.scss"

const Navbar = ({ handleAnimationClose }) => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo"></img>
            <ul className="navbar__list">
                <CustomLink to="/home" name="home" handleAnimationClose={handleAnimationClose} />
                <CustomLink to="/blog" name="blog" handleAnimationClose={handleAnimationClose} />
            </ul>
        </div>
    )
}

export default Navbar
