import React from 'react'
import "../../styles/navbar.scss"
import Logo from "../../assets/Logo.png"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
color: inherit;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={Logo}></img>
            <ul className="navbar__list">
                <StyledLink to="/home">
                    <li className="navbar__list__item">Home</li>
                </StyledLink>
                <StyledLink to="/blog">
                    <li classList="navbar__list__item">Blog</li>
                </StyledLink>
            </ul>
        </div>
    )
}

export default Navbar
