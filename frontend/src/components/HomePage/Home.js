import React, { useState } from 'react'
import CustomCursor from '../CustomCursor/CustomCursor'
import Loading from '../LoadingPage/Loading'
import "../../styles/home.scss"

const Home = () => {

    const [shouldLoad, setShouldLoad] = useState(false)

    const handleAnimationStart = () => {
        setShouldLoad(!shouldLoad)
    }

    return (
        <>
        <CustomCursor />
        <Loading handleAnimationStart={ handleAnimationStart }/>
        <div className="home">
            Home
        </div>
        </>
    )
}

export default Home
