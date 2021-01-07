import React from "react"
import Logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import "../../styles/navbar.scss"

const StyledLink = styled(NavLink)`
color: inherit;
padding: 0 15px 0 15px;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo"></img>
            <ul className="navbar__list">
                <StyledLink to="/home">
                    <li className="navbar__list__item">home</li>
                </StyledLink>
                <StyledLink to="/blog">
                    <li className="navbar__list__item">blog</li>
                </StyledLink>
            </ul>
        </div>
    )
}

export default Navbar
