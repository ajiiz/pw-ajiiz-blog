import * as api from "../api/index.js"
import { AUTH, LOGOUT } from "../constants/actionTypes"

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)
    dispatch({ type: AUTH, payload: data })
    router.push("/post")

  } catch (e) {
    console.log(e)
  }
}

export const logout = (router) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT})
    router.push("/login")
  } catch (e) {
    console.log(e)
  }
}