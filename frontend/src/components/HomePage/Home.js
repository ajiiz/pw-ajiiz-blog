import React, { useState } from 'react'
import CustomCursor from '../CustomCursor/CustomCursor'
import Loading from '../LoadingPage/Loading'

const Home = () => {

    const [shouldLoad, setShouldLoad] = useState(false)

    const handleAnimationStart = () => {
        setShouldLoad(!shouldLoad)
    }

    return (
        <>
        <CustomCursor />
        <Loading handleAnimationStart={ handleAnimationStart }/>
        <div>
            Home
        </div>
        </>
    )
}

export default Home
