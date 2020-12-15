import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from './components/HomePage/Home'
import Login from './components/LoginPage/Login'
import Blog from './components/BlogPage/Blog'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"></Redirect>
                </Route>
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/blog" component={Blog} />
            </Switch>
        </Router>
    )
}

export default App