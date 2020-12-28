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
        }} className="cursor">
            <svg style={{ position: "absolute", top: -8, left: -8 }}></svg>
        </div>
    )
}

export default CustomCursor