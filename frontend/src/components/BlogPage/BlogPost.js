import React from 'react'

const BlogPost = ({post, key}) => {
    return (
        <div className="blog__wrapper__posts__post" key={key}>
            <div className="blog__wrapper__posts__post__image">
                <img alt="post" src={post.selectedFile}></img>
            </div>
            <div className="blog__wrapper__posts__post__content">
                <div className="blog__wrapper__posts__post__content__date">
                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                    <p className="blog__wrapper__posts__post__content__date__text">16.02.21</p>
                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                </div>
                <p className="blog__wrapper__posts__post__content__title">{post.title}</p>
                <p className="blog__wrapper__posts__post__content__details">{post.content}</p>
            </div>
        </div>
    )
}

export default BlogPost
