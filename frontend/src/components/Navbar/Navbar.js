import React from "react"
import Logo from "../../assets/logo.png"
import "../../styles/navbar.scss"
import CustomLink from "./CustomLink"

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
