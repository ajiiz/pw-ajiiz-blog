import React, { useEffect, useState } from 'react'
import CustomCursor from '../CustomCursor/CustomCursor'
import Loading from '../LoadingPage/Loading'

const Home = () => {

    const [shouldLoad, isShouldLoad] = useState(false)

    const handleAnimationStart = () => {
        isShouldLoad(!shouldLoad)
        console.log("changed")
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
