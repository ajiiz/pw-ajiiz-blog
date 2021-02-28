import React, { useEffect, useState, useRef } from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import { Power1, gsap } from "gsap"
import "../../styles/post.scss"

const Post = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState()

    let container = useRef(null)

    const handleAnimationClose = () => {
        gsap.to(container.children[1].children[1].children, {duration: .5, opacity: 0, y: "-30", stagger: 0.2, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[0], {delay: 1, duration: .6, opacity: 0, y: "-30", ease: Power1.easeInOut})
        gsap.to(container, {delay: 1.3, duration: .4, opacity: 0, ease: Power1.easeInOut})
    }

    useEffect(() => {
        gsap.to(container.children[1], {delay: .4, duration: .6, opacity: 1, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[0], {delay: .7, duration: .6, opacity: 1, y: 0, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[1].children, {delay: 1.2, duration: .5, opacity: 1, y: 0, stagger: 0.3, ease: Power1.easeInOut})
    }, [])

    return (
        <>
        <Navbar handleAnimationClose={handleAnimationClose} />
        <div className="post" ref={el => container = el}>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="post__wrapper">
                    <p className="post__wrapper__header">Post office</p>
                    <form className="post__wrapper__form">
                        <p className="post__wrapper__form__name">
                            Title
                        </p>
                        <input
                            className="input-text post__wrapper__form__input"
                            type="text"
                            placeholder="username"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <p className="post__wrapper__form__name">
                            Content
                        </p>
                        <textarea
                            className="input-text post__wrapper__form__input post__wrapper__form__input--textarea"
                            placeholder="content"
                            name="content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        <p className="post__wrapper__form__name">
                            Image
                        </p>
                        <input
                            className="post__wrapper__form__image"
                            type="file"
                            name="image"
                            onChange={e => setFile(e.target.files[0])}
                        />
                        <input
                            className="input-submit post__wrapper__form__submit"
                            type="submit"
                            value="post"
                        />
                    </form>
                </div>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Post
