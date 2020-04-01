import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './pages/home/newHome'
import Product from './pages/product/product'
import AboutUs from './pages/aboutUs/aboutUs'
import Services from './pages/services/services'

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
                <CustomRoute path="/product" Component={Product} exact />
                <CustomRoute path="/aboutus" Component={AboutUs} exact />
                <CustomRoute path="/services" Component={Services} exact />
            </Switch>
        </Router>
    )
}

export default AppRouter
