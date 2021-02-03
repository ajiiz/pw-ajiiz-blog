import React from 'react'
import { NavLink, useHistory } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(NavLink)`
color: inherit;
padding: 0 15px 0 15px;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const CustomLink = ({ to, name }) => {
    return (
        <StyledLink to={to} onClick={delayedLinkPush}>
            <li className="navbar__list__item">{name}</li>
        </StyledLink>
    )
}

export default CustomLink