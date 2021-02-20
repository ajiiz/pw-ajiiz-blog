import React, { useState, useEffect, useRef }  from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import "../../styles/blog.scss"
import { Power1, gsap } from "gsap"
import testImage from '../../assets/home-profile.jpg'
import { FaArrowUp } from "react-icons/fa";

const Blog = () => {

    const [isScrollUp, setIsScrollUp] = useState(false)
    let container = useRef(null)

    /* ANIMATION START */
    useEffect(() => {
        gsap.to(container.children[1].children[0],  {delay: 1, duration: .8, opacity: 1, y: 0, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[1],{delay: 1.6, duration: .5, opacity: 1, stagger: 0.5, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[1].children,{delay: 1.6, duration: .5, opacity: 1, y: 0, stagger: 0.5, ease: Power1.easeInOut})

        container.addEventListener('scroll', checkTop);
        return () => window.removeEventListener('scroll', checkTop);
    }, [])

    /* ANIMATION CLOSE */
    const handleAnimationClose = () => {
        gsap.to(container.children[1].children[0],  {delay: 1, duration: .5, opacity: 0, y: "-30", ease: Power1.easeInOut})
        gsap.to(container.children[1].children[1].children,{delay: 1.2, duration: .5, opacity: 0, y: "-30", stagger: 0.5, ease: Power1.easeInOut})
        gsap.to(container, {delay: 1.8, duration: 1, opacity: 0, ease: Power1.easeInOut})
    }

    const arrowUpStyle = {
        fontSize: "0.60em",
        fontWeight: "ligher"
    }

    const scrollTop = () => {
        document.body.children[1].children[2].scrollTop = 0
        setIsScrollUp(false)
    }

    const checkTop = () => {
        if (document.body.children[1].children[2].scrollTop > 450) setIsScrollUp(true)
    }

    return (
        <>
            <Navbar handleAnimationClose={handleAnimationClose} />
            <div className="blog" ref= {el => container = el}>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="blog__wrapper">
                    <div className="blog__wrapper__header">
                        <p className="blog__wrapper__header__text">Welcome to my madness</p>
                    </div>
                    <div className="blog__wrapper__posts">
                    {/* There will be mapping through posts */}
                        <div className="blog__wrapper__posts__post">
                            <div className="blog__wrapper__posts__post__image">
                                <img alt="post" src={testImage}></img>
                            </div>
                            <div className="blog__wrapper__posts__post__content">
                                <div className="blog__wrapper__posts__post__content__date">
                                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                                    <p className="blog__wrapper__posts__post__content__date__text">16.02.21</p>
                                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                                </div>
                                <p className="blog__wrapper__posts__post__content__title">Black Roses Title</p>
                                <p className="blog__wrapper__posts__post__content__details">
                                    “The Laughing Heart
                                    your life is your life
                                    don’t let it be clubbed into dank submission.
                                    be on the watch.
                                    there are ways out.
                                    there is a light somewhere.
                                    it may not be much light but
                                    it beats the darkness.
                                    be on the watch.
                                    the gods will offer you chances.
                                    know them.
                                    take them.
                                    you can’t beat death but
                                    you can beat death in life, sometimes.
                                    and the more often you learn to do it,
                                    the more light there will be.
                                    your life is your life.
                                    know it while you have it.
                                    you are marvelous
                                    the gods wait to delight
                                    in you.”
                                </p>
                            </div>
                        </div>
                        <div className="blog__wrapper__posts__post">
                            <div className="blog__wrapper__posts__post__image">
                                <img alt="post" src={testImage}></img>
                            </div>
                            <div className="blog__wrapper__posts__post__content">
                                <div className="blog__wrapper__posts__post__content__date">
                                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                                    <p className="blog__wrapper__posts__post__content__date__text">16.02.21</p>
                                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                                </div>
                                <p className="blog__wrapper__posts__post__content__title">Black Roses Title</p>
                                <p className="blog__wrapper__posts__post__content__details">
                                    “The Laughing Heart
                                    your life is your life
                                    don’t let it be clubbed into dank submission.
                                    be on the watch.
                                    there are ways out.
                                    there is a light somewhere.
                                    it may not be much light but
                                    it beats the darkness.
                                    be on the watch.
                                    the gods will offer you chances.
                                    know them.
                                    take them.
                                    you can’t beat death but
                                    you can beat death in life, sometimes.
                                    and the more often you learn to do it,
                                    the more light there will be.
                                    your life is your life.
                                    know it while you have it.
                                    you are marvelous
                                    the gods wait to delight
                                    in you.”
                                </p>
                            </div>
                        </div>
                        <div className="blog__wrapper__posts__post">
                            <div className="blog__wrapper__posts__post__image">
                                <img alt="post" src={testImage}></img>
                            </div>
                            <div className="blog__wrapper__posts__post__content">
                                <div className="blog__wrapper__posts__post__content__date">
                                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                                    <p className="blog__wrapper__posts__post__content__date__text">16.02.21</p>
                                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                                </div>
                                <p className="blog__wrapper__posts__post__content__title">Black Roses Title</p>
                                <p className="blog__wrapper__posts__post__content__details">
                                    “The Laughing Heart
                                    your life is your life
                                    don’t let it be clubbed into dank submission.
                                    be on the watch.
                                    there are ways out.
                                    there is a light somewhere.
                                    it may not be much light but
                                    it beats the darkness.
                                    be on the watch.
                                    the gods will offer you chances.
                                    know them.
                                    take them.
                                    you can’t beat death but
                                    you can beat death in life, sometimes.
                                    and the more often you learn to do it,
                                    the more light there will be.
                                    your life is your life.
                                    know it while you have it.
                                    you are marvelous
                                    the gods wait to delight
                                    in you.”
                                </p>
                            </div>
                        </div>
                    {/* ------------ */}
                    </div>
                    <div className="blog__wrapper__scroll-up" onClick={scrollTop} style={(isScrollUp) ? {opacity: 1, visibility: "visible"} : null}>
                        <FaArrowUp style={arrowUpStyle}/>
                        <p className="blog__wrapper__scroll-up__text">scroll up</p>
                    </div>
                </div>
                <div className="background-square background-square--blog"></div>
                <div className="background-triangle background-triangle--blog"></div>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Blog
