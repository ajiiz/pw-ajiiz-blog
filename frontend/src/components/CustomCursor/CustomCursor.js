import React from "react"
import useMousePosition from "../../hooks/useMousePosition"

const CustomCursor = () => {

    const { clientX, clientY } = useMousePosition()

    return (
        <div style={{
            position: "fixed",
            top: clientY - 20,
            left: clientX - 20,
            zIndex: 9999,
            pointerEvents: "none",
            borderRadius: "50%",
            border: "1px solid #E2E2E2",
            width: "35px",
            height: "35px"
        }}>
            <svg style={{ position: "absolute", top: -8, left: -8 }}>
                <circle cx="25" cy="25" r="5" fill="#151515"></circle>
            </svg>
        </div>
    )
}

export default CustomCursor