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
                    <div className="home__main__content">
                        <span className="home__main__content__header">I design my own world</span>
                        <ul className="home__main__content__info">
                            <li className="home__main__content__info__text">student</li>
                            <li className="home__main__content__info__text">designer</li>
                            <li className="home__main__content__info__text">programmer</li>
                            <li className="home__main__content__info__text">photographer</li>
                        </ul>
                        <div className="home__main__content__contact">
                            <button className="home__main__content__contact__btn">portfolio</button>
                            <button className="home__main__content__contact__btn">contact</button>
                        </div>
                    </div>

                </div>
                <div className="home__banner"><img src={ BannerDark } alt="banner"></img></div>
            </div>
        </>
    )
}

export default Home
