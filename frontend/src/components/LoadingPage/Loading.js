import React, { useState, useEffect } from 'react'
import BannerLight from '../../assets/LoadingTextHeader-light.svg'
import BannerDark from '../../assets/LoadingTextHeader-dark.svg'
import '../../styles/loading.scss'

const Loading = () => {

    const [count, setCount] = useState(1)

    useEffect(() => {
        let i = 1
        const interval = setInterval(() => {
            i += (Math.floor(Math.random() * 2) + 1)
            if (i <= 100) {
                setCount(i)
            } else {
                setCount(100)
                clearInterval(interval)
            }
        }, 60)
    }, [])

    return (
        <div className="loading">
            <div className="loading__text">
                <h1 className="loading__text__header">
                HOLD ON, YOUR WEB EXPERIENCE IS
                <span className="loading__text__header__reversed"> LOADING</span>
                <span className="loading__text__header__numbers">{ count}-100</span>
                </h1>
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
