import React from "react"
import styled from "styled-components"
import useMousePosition from "../../hooks/useMousePosition"

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

const CursorView = styled.svg `
    position: absolute;
    top: -8;
    left: -8;
`

const CustomCursor = () => {

    const { clientX, clientY } = useMousePosition()

    return (
        <Cursor className="cursor" clientY={clientY} clientX={clientX}>
            <CursorView></CursorView>
        </Cursor>
    )
}

export default CustomCursor