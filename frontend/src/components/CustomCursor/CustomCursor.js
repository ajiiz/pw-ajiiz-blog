import React from "react"
import useMousePosition from "../../hooks/useMousePosition"
import styled from 'styled-components'

const Cursor = styled.div.attrs(props => ({
    style: {
        left: props.clientX - 20,
        top: props.clientY - 20
    },
}))`
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    border-radius: 50%;
    border: 1px solid #E2E2E2;
    width: 35px;
    height: 35px;
    `

const CustomCursor = () => {

    const { clientX, clientY } = useMousePosition()

    return (
        <Cursor className="cursor" clientY={clientY} clientX={clientX}>
            <svg style={{ position: "absolute", top: -8, left: -8 }}></svg>
        </Cursor>
    )
}

export default CustomCursor