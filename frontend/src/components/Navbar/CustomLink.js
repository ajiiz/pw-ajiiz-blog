import React from 'react'
import { NavLink, useHistory } from "react-router-dom"
import styled from "styled-components"

const CustomLink = ({ to, name }) => {
    return (
        <StyledLink to={to} onClick={delayedLinkPush}>
            <li className="navbar__list__item">{name}</li>
        </StyledLink>
    )
}

export default CustomLink