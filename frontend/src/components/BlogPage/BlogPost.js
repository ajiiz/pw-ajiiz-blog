import React from 'react'

const BlogPost = ({ post }) => {

    const getPostDate = () => {
        let arrDate = post.createdAt.slice(2,10).split("")
        let date = arrDate[6]+arrDate[7]+"."+arrDate[3]+arrDate[4]+"."+arrDate[0]+arrDate[1]
        return date
    }

    return (
        <div className="blog__wrapper__posts__post">
            <div className="blog__wrapper__posts__post__image">
                <img alt="post" src={post.selectedFile}></img>
            </div>
            <div className="blog__wrapper__posts__post__content">
                <div className="blog__wrapper__posts__post__content__date">
                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                    <p className="blog__wrapper__posts__post__content__date__text">{ getPostDate() }</p>
                    <div className="blog__wrapper__posts__post__content__date__divider"></div>
                </div>
                <p className="blog__wrapper__posts__post__content__title">{post.title}</p>
                <p className="blog__wrapper__posts__post__content__details">{post.content}</p>
            </div>
        </div>
    )
}

export default BlogPost
