import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import Services from './ServicePage/Services'
import LocalSeo from './LocalSeo/Index'
import SMM from './SMM/Index'

class ServiceRoutes extends Component { 
    render() {
        return (
            <Switch>
                <Route path = "/services/local_seo" component = {LocalSeo} />
                <Route path = "/services/email_marketing" component = {Services} />
                <Route path = "/services/service_detail" component = {SMM} />
                <Route path = "/services/service_detail_seo" component = {Services} />
                <Route path = "/services/service_detail_seo" component = {Services} />
                <Route path = "/services/service_ppc_management" component = {Services} />
                <Route path = "/services/services_promo_list" component = {Services} />
                <Route exact path = "/services" component = {Services} />
            </Switch>
        );
    }
}

export default ServiceRoutes;