const postsReducer =  (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload //posts
        case "CREATE":
            return [ ...posts, action.payload ]
        default:
            return posts
    }
}

export default postsReducer