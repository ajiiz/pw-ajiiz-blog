import { combineReducers } from "redux"
import posts from "./posts"
import auth from "./auth"

export default combineReducers({ posts, auth }) // posts:posts is same as posts because key and the value are the same