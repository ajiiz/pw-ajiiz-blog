import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" }) //live api https://pw-ajiiz-blog.herokuapp.com/

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const fetchPosts = () => API.get("/posts")
export const createPost = (newPost) => API.post("/posts", newPost)

export const signIn = (formData) => API.post("/user/signin", formData)