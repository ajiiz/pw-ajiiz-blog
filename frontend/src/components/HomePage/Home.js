import React, { useState, useEffect } from "react"
import Loading from "../LoadingPage/Loading"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import ProfileImage from "../../assets/home-profile.jpg"
import FacebookIcon from "../../assets/facebook-icon.svg"
import GithubIcon from "../../assets/github-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"
import LinkedInIcon from "../../assets/linkedin-icon.svg"
import { Power1, gsap } from "gsap"
import "../../styles/home.scss"

const Home = () => {

    const [shouldLoad, setShouldLoad] = useState(false)

    const handleAnimationStart = () => {
        setShouldLoad(!shouldLoad)
    }

    useEffect(() => {
        if (shouldLoad) {
            //Fade in animation
            console.log("Loading in")
        } else {
            //Fade out animation
            console.log("Loading out")
        }
    }, [shouldLoad])

    return (
        <>
            <Loading handleAnimationStart={handleAnimationStart}/>
            <Navbar />
            <div className="home">
                <div className="home__banner"><img src={BannerDark} alt="banner"></img></div>
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
                            <button className="home__main__content__contact__btn btn"><a href="https://github.com/ajiiz" target="_blank" rel="noreferrer">portfolio</a></button>
                            <button className="home__main__content__contact__btn btn"><a href="mailto:piotrwrobel.ajiiz@gmail.com">contact</a></button>
                        </div>
                    </div>
                    <div className="home__main__side">
                        <div className="home__main__side__image">
                            <img src={ProfileImage} alt="profile"></img>
                        </div>
                        <ul className="home__main__side__info">
                            <li className="home__main__side__info__text">* caffeinated drinks lover</li>
                            <li className="home__main__side__info__text">* programming nerd</li>
                            <li className="home__main__side__info__text">* love swimming and travelling</li>
                        </ul>
                    </div>
                    <div className="home__main__socialmedia">
                        <a className="home__main__socialmedia__link" href="https://github.com/ajiiz" target="_blank" rel="noreferrer">
                            <img className="home__main__socialmedia__link__icon" src={GithubIcon} alt="github"></img>
                        </a>
                        <a className="home__main__socialmedia__link" href="https://www.instagram.com/pvvrbl/" target="_blank" rel="noreferrer">
                            <img className="home__main__socialmedia__link__icon" src={InstagramIcon} alt="instagram"></img>
                            </a>
                        <a className="home__main__socialmedia__link" href="https://www.linkedin.com/in/piotr-wrobel-b514501b3/" target="_blank" rel="noreferrer">
                            <img className="home__main__socialmedia__link__icon" src={LinkedInIcon} alt="linkedin"></img>
                        </a>
                        <a className="home__main__socialmedia__link" href="https://www.facebook.com/piotr.wrobel.99/" target="_blank" rel="noreferrer">
                            <img className="home__main__socialmedia__link__icon" src={FacebookIcon} alt="facebook"></img>
                        </a>
                    </div>
                </div>
                <div className="home__banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Home
