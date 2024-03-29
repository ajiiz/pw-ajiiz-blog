import React, { useEffect, useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createPost } from "../../actions/posts"
import { Power1, gsap } from "gsap"
import { logout } from "../../actions/auth"
import decode from 'jwt-decode';
import FileBase from "react-file-base64"
import Navbar from "../Navbar/Navbar"

import BannerDark from "../../assets/banner-dark.svg"

import "../../styles/post.scss"


const Post = () => {

    const [postData, setPostData] = useState({ title: "", content: "", selectedFile: ""})
    const [validTitle, setValidTitle] = useState(true)
    const [validContent, setValidContent] = useState(true)
    const [validSelectedFile, setValidSelectedFile] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem("profile"))

    let container = useRef(null)

    const handleAnimationClose = () => {
        gsap.to(container.children[1].children[1].children, {duration: .5, opacity: 0, y: "-30", stagger: 0.2, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[0], {delay: 1, duration: .6, opacity: 0, y: "-30", ease: Power1.easeInOut})
        gsap.to(container, {delay: 1.3, duration: .4, opacity: 0, ease: Power1.easeInOut})
    }

    useEffect(() => {

        if (user === null) {
            history.push("/login")
        }

        const token = user?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout()
        }

        gsap.to(container.children[1], {delay: .4, duration: .6, opacity: 1, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[0], {delay: .7, duration: .6, opacity: 1, y: 0, ease: Power1.easeInOut})
        gsap.to(container.children[1].children[1].children, {delay: 1.2, duration: .5, opacity: 1, y: 0, stagger: 0.3, ease: Power1.easeInOut})
    }, [])

    useEffect(() => {
        if (postData.title.length <= 1) setValidTitle(false)
        else setValidTitle(true)

        if (postData.content.length < 10) setValidContent(false)
        else setValidContent(true)

        if (postData.selectedFile === "") setValidSelectedFile(false)
        else setValidSelectedFile(true)
    },[postData])

    const clearPostData = () => {
        setPostData({ title: "", content: "", selectedFile: "" })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validTitle && validContent && validSelectedFile) {
            dispatch(createPost(postData))
            clearPostData()
        }
    }

    const handleLogout = async () => {
        clearPostData()
        dispatch(logout(history))
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
                            style={!validTitle ? {borderColor: "red"} : {borderColor: "inherit"}}
                            type="text"
                            placeholder="title"
                            name="title"
                            value={postData.title}
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        />
                        <p className="post__wrapper__form__name">
                            Content
                        </p>
                        <textarea
                            className="input-text post__wrapper__form__input post__wrapper__form__input--textarea"
                            style={!validContent ? {borderColor: "red"} : {borderColor: "inherit"}}
                            placeholder="content"
                            value={postData.content}
                            onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                        />
                        <p className="post__wrapper__form__name">
                            Image
                        </p>
                        <div className="post__wrapper__form__image" style={!validSelectedFile ? {borderColor: "red"} : {borderColor: "inherit"}}>
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
                        <button className="input-submit post__wrapper__form__submit" onClick={handleLogout}>logout</button>
                    </form>
                </div>
                <div className="banner"><img src={BannerDark} alt="banner"></img></div>
            </div>
        </>
    )
}

export default Post
