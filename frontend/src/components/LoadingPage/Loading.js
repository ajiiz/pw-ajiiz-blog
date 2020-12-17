import React, { useState, useEffect, useRef } from 'react'
import BannerLight from '../../assets/LoadingTextHeader-light.svg'
import BannerDark from '../../assets/LoadingTextHeader-dark.svg'
import { Power1, gsap } from 'gsap'
import '../../styles/loading.scss'

const Loading = ({ handleAnimationStart }) => {

    const [count, setCount] = useState(1)
    let container = useRef(null)

    useEffect(() => {
        let i = 1
        const interval = setInterval(() => {
            i += (Math.floor(Math.random() * 2) + 1)
            if (i <= 100) {
                setCount(i)
            } else {
                setCount(100)
                handleAnimationStart()
                clearInterval(interval)
            }
        }, 60)
    }, [])

    return (
        <div className="loading" ref= {el => container = el}>
            <div className="loading__text">
                <div className="loading__text__header">
                    <span className="loading__text__header__main">HOLD ON, YOUR WEB EXPERIENCE IS </span>
                    <span className="loading__text__header__reversed">LOADING</span>
                    <span className="loading__text__header__numbers">{ count}-100</span>
                </div>
                <p className="loading__text__info">
                    please wait a few seconds.
                </p>
            </div>
            <div className="loading__banners">
                <div className="loading__banners__banner loading__banners__banner-dark"><img src={ BannerDark } alt="banner"></img></div>
                <div className="loading__banners__banner loading__banners__banner-light"><img src={ BannerLight } alt="banner"></img></div>
                <div className="loading__banners__banner loading__banners__banner-dark"><img src={ BannerDark } alt="banner"></img></div>
            </div>
        </div>
    )
}

export default Loading
