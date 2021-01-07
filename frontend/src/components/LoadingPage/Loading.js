import React, { useState, useEffect, useRef } from "react"
import BannerLight from "../../assets/banner-light.svg"
import BannerDark from "../../assets/banner-dark.svg"
import { Power1, gsap } from "gsap"
import "../../styles/loading.scss"

const Loading = ({ handleAnimationStart }) => {

    const [count, setCount] = useState(1)
    let container = useRef(null)

    useEffect(() => {

        const main = container.children[0].firstElementChild.firstElementChild
        const reversed = container.children[0].firstElementChild.children[1]
        const numbers = container.children[0].firstElementChild.children[2]
        const information = container.children[0].children[1]
        const banners = container.children[1]
        const loadingItems = container.children
        const loading = container

        gsap.to(main,  {delay: 0.5, duration: 1.5, opacity: 1, ease: Power1.easeInOut})
        gsap.to(banners,  {delay: 0.5, duration: 1.5, opacity: 1, stagger: 0.8, ease: Power1.easeInOut})
        gsap.to(reversed,  {delay: 1.4, duration: 1, opacity: 1, y: "0" , ease: Power1.easeInOut})
        gsap.to(numbers,  {delay: 1.5, duration: 1, y: "0" , ease: Power1.easeInOut})
        gsap.to(information,  {delay: 2.2, duration: 1, opacity: 1, ease: Power1.easeInOut})

        setTimeout(() => {
            let i = 1
            const interval = setInterval(() => {
                i += (Math.floor(Math.random() * 3) + 1)
                if (i <= 100) {
                    setCount(i)
                } else {
                    setCount(100)
                    gsap.to(loadingItems, {duration: 1.5, opacity: 0, ease: Power1.easeInOut})
                    gsap.to(loading, {delay: 1.5, duration: 0.5, y: "-100%", ease: Power1.easeInOut})
                    handleAnimationStart()
                    clearInterval(interval)
                    setTimeout(() => {
                        gsap.to(loading, {duration: 0.5, display: "none"})
                    }, 2500)
                }
            }, 60)
        }, 3200)
    }, [])

    return (
        <div className="loading" ref= {el => container = el}>
            <div className="loading__text">
                <div className="loading__text__header">
                    <span className="loading__text__header__main">HOLD ON, YOUR WEB EXPERIENCE IS </span>
                    <span className="loading__text__header__reversed">LOADING</span>
                    <span className="loading__text__header__numbers">{count}-100</span>
                </div>
                <span className="loading__text__info">
                    please wait a few seconds.
                </span>
            </div>
            <div className="loading__banners">
                <div className="loading__banners__banner loading__banners__banner-dark"><img src={BannerDark} alt="banner"></img></div>
                <div className="loading__banners__banner loading__banners__banner-light"><img src={BannerLight} alt="banner"></img></div>
                <div className="loading__banners__banner loading__banners__banner-dark"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </div>
    )
}

export default Loading
