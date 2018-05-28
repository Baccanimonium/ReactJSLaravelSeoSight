import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'

import Footer from './Footer'
import MainPage from './MainPage/Index'
import ServiceRoutes from './Services/Index'
import CaseStudies from './CaseStudies/Index'
import CasePage from './CaseStudies/CasePage/Index'
import PricingPackage from './PricingPackage'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import ResetPassword from '../Auth/ResetPassword'
import AdminRoute from './Admin/AdminRoute'


const Layout = () => {

    return(
        <div>
            <Switch>
                <Route exact path = "/login" component = {Login} />
                <Route path = "/register/:authCode" component = {Register} />
                <Route path = "/register" component = {Register} />
                <Route exact path = "/reset_password" component = {ResetPassword} />
                <Route exact path = "/" component = {MainPage} />
                <Route path = "/services" component = {ServiceRoutes} />
                <Route exact path = "/case_studies/show/:id" component = {CasePage} />
                <Route path = "/case_studies/:page/:filter" component = {CaseStudies} />
                <Redirect from='/case_studies' to='/case_studies/1/all_projects'/>
                <Route path = "/pricing-tables" component = {PricingPackage} />
                <AdminRoute path = "/admin" />
            </Switch>
            <Footer/>
        </div>
    )
}

export default Layout