import React from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import { Power1, gsap } from "gsap"
import "../../styles/post.scss"

const Post = () => {

    const handleAnimationClose = () => {
        //There goes animation when changing the page
    }

    return (
        <>
        <Navbar handleAnimationClose={handleAnimationClose} />
        <div className="banner"><img src={BannerDark} alt="banner"></img></div>
        <div className="post">
            Post
        </div>
        <div className="banner"><img src={BannerDark} alt="banner"></img></div>
        </>
    )
}

export default Post
