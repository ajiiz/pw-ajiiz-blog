import React, { useEffect, useState } from 'react'
import CustomCursor from '../CustomCursor/CustomCursor'
import Loading from '../LoadingPage/Loading'

const Home = () => {

    const [shouldLoad, isShouldLoad] = useState(false)

    return (
        <>
        <CustomCursor shouldLoad={ shouldLoad } />
        <Loading />
        <div>
            Home
        </div>
        </>
    )
}

export default Home
