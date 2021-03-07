import React, { useEffect, useState, useRef } from "react"
import Navbar from "../Navbar/Navbar"
import BannerDark from "../../assets/banner-dark.svg"
import FileBase from "react-file-base64"
import { Power1, gsap } from "gsap"
import "../../styles/post.scss"
import { useDispatch } from "react-redux"
import { createPost } from "../../actions/posts"

const Post = () => {

    const [postData, setPostData] = useState({ title: "", content: "", selectedFile: ""})
    const dispatch = useDispatch()

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
        console.log(postData)
    }

    return (
        <>
        <Navbar handleAnimationClose={handleAnimationClose} />
        <div className="post" ref={el => container = el}>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
                <div className="post__wrapper">
                    <p className="post__wrapper__header">Post office</p>
                    <form className="post__wrapper__form" onSubmit={handleSubmit}>
                        <p className="post__wrapper__form__name">
                            Title
                        </p>
                        <input
                            className="input-text post__wrapper__form__input"
                            type="text"
                            placeholder="username"
                            name="title"
                            value={postData.title}
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        />
                        <p className="post__wrapper__form__name">
                            Content
                        </p>
                        <textarea
                            className="input-text post__wrapper__form__input post__wrapper__form__input--textarea"
                            placeholder="content"
                            value={postData.content}
                            onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                        />
                        <p className="post__wrapper__form__name">
                            Image
                        </p>
                        <div className="post__wrapper__form__image">
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64})}
                            />
                        </div>
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
