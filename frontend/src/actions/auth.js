import * as api from '../api/index.js'

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData)
      dispatch({ type: "AUTH", payload: data })
      router.push('/post')

    } catch (e) {
      console.log(e)
    }
  }