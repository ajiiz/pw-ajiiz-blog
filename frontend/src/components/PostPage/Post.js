import React, { useEffect, useState, useRef } from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import { Power1, gsap } from "gsap"
import "../../styles/post.scss"

const Post = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState()

    const handleAnimationClose = () => {
        //There goes animation when changing the page
    }

    return (
        <>
        <Navbar handleAnimationClose={handleAnimationClose} />
        <div className="post">
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
