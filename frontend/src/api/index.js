import axios from "axios"

//const url = "http://localhost:5000"

const API = axios.create({ baseURL: 'http://localhost:5000' }) //later zeet app

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => axios.post('/posts', newPost)

export const signIn = (formData) => API.post('/user/signin', formData)