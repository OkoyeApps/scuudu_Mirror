import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './pages/home/newHome'
import Store from './pages/scuudu-store/scuudu-store'
import ScuuduVideos from './pages/scuuduVideo/scuuduVideo'


const CustomRoute = ({ Component, path, exact, ...rest }) => {
    return <Route exact={exact} path={path} render={props => {
        return <Layout><Component /></Layout>
    }} />
}

function AppRouter() {
    return (
        <Router>
            <Switch>
                <CustomRoute path="/" Component={Home} exact />
                <CustomRoute path="/store" Component={Store} exact />
                <CustomRoute path="/videos" Component={ScuuduVideos} exact />
            </Switch>
        </Router>
    )
}

export default AppRouter
