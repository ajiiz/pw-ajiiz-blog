import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import { useDispatch } from "react-redux"
import Home from "./components/HomePage/Home"
import Login from "./components/LoginPage/Login"
import Blog from "./components/BlogPage/Blog"
import Post from "./components/PostPage/Post"
import "./styles/main.scss"
import CustomCursor from "./components/CustomCursor/CustomCursor"
import { getPosts } from "./actions/posts"

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            <CustomCursor />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home"></Redirect>
                    </Route>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/post" component={Post} />
                </Switch>
            </Router>
        </>
    )
}

export default App