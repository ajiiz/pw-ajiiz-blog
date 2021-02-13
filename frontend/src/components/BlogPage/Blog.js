import React, { useEffect, useRef }  from "react"
import Navbar from "../Navbar/Navbar"
import "../../styles/blog.scss"
import { Power1, gsap } from "gsap"

const Blog = () => {

    let container = useRef(null)

    /* ANIMATION START */
    useEffect(() => {
        gsap.from(container, {delay: 0, duration: 2, opacity: 0, ease: Power1.easeInOut})
        gsap.to(container, {delay: 0, duration: 2, opacity: 1, ease: Power1.easeInOut})
    }, [])

    /* ANIMATION CLOSE */
    const handleAnimationClose = () => {
        gsap.to(container, {delay: 0, duration: 2, opacity: 0, ease: Power1.easeInOut})
    }

    return (
        <>
            <Navbar handleAnimationClose={handleAnimationClose} />
            <div className="blog" ref= {el => container = el}>
            <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="blog__header">
                    <h1 className="blog__header__text">Welcome to my mandness</h1>
                </div>
            <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Blog
