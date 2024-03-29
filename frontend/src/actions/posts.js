import * as api from "../api"
import { FETCH_ALL, CREATE } from "../constants/actionTypes"

//Action creators

export const getPosts = () => async (dispatch) => {

    try {
        const { data }  = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data.reverse() })
    } catch (error) {
        console.log(error.message)
    }

}

export const createPost = (post) => async(dispatch) => {

    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }

}