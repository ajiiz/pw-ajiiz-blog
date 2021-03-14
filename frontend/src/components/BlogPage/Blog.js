import React, { useState, useEffect, useRef }  from "react"
import { useSelector } from "react-redux"
import { Power1, gsap } from "gsap"
import Navbar from "../Navbar/Navbar"
import BlogPost from"./BlogPost"

import BannerDark from "../../assets/banner-dark.svg"
import testImage from '../../assets/home-profile.jpg'
import { FaArrowUp } from "react-icons/fa";
import "../../styles/blog.scss"

const Blog = () => {

    const [isScrollUp, setIsScrollUp] = useState(false)
    const posts = useSelector((state) => state.posts)

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
                    {!posts.length ? <p>Posts missing</p> : (
                        posts.map((post, key) => (
                            <BlogPost post={post} key={key} />
                        ))
                    )}
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
