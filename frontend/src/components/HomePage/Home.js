import React, { useState } from "react"
import Loading from "../LoadingPage/Loading"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/LoadingTextHeader-dark.svg"
import "../../styles/home.scss"

const Home = () => {

    const [shouldLoad, setShouldLoad] = useState(false)

    const handleAnimationStart = () => {
        setShouldLoad(!shouldLoad)
    }

    return (
        <>
            <Loading handleAnimationStart={ handleAnimationStart }/>
            <Navbar />
            <div className="home">
                <div className="home__banner"><img src={ BannerDark } alt="banner"></img></div>
                <div className="home__main">
                    Home
                </div>
                <div className="home__banner"><img src={ BannerDark } alt="banner"></img></div>
            </div>
        </>
    )
}

export default Home
