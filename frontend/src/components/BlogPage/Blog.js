import React, { useEffect, useRef }  from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
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
                <div className="blog__wrapper">
                    <div className="blog__wrapper__header">
                        <p className="blog__wrapper__header__text">Welcome to my mandness</p>
                    </div>
                    <div className="blog__wrapper__posts">
                    {/* There will be mapping through posts */}
                        <div className="blog__wrapper__posts__post">
                            <div className="blog__wrapper__posts__post__image">
                                <img alt="post"></img>
                            </div>
                            <div className="blog__wrapper__posts__post__content">
                                <div className="blog__wrapper__posts__post__content__date">date</div>
                                <h2 className="blog__wrapper__posts__post__content__title">title</h2>
                                <p className="blog__wrapper__posts__post__content__details">content</p>
                            </div>
                        </div>
                    {/* ------------ */}
                    </div>
                    <div className="blog__wrapper__scroll-up"></div>
                </div>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Blog
