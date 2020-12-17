import React, { useEffect, useState } from 'react'
import CustomCursor from '../CustomCursor/CustomCursor'
import Loading from '../LoadingPage/Loading'

const Home = () => {

    const [shouldLoad, isShouldLoad] = useState(false)

    const handleAnimationStart = () => {
        isShouldLoad(!shouldLoad)
    }

    return (
        <>
        <CustomCursor handleAnimationStart={ handleAnimationStart } />
        <Loading />
        <div>
            Home
        </div>
        </>
    )
}

export default Home
