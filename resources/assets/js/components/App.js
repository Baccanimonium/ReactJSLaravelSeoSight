
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './ui/menu/index'
import Layout from './ui/Layout'
import history from '../history'
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import {APP_URL} from "../constants"

class App extends Component {

    getChildContext(){
        return {
            appUrl: APP_URL
        }
    }

    render() {
        return (
            <Router history = {history}>
                <div>
                    <Header/>
                    <Layout/>
                </div>
            </Router>
        );
    }
}


export default App

App.childContextTypes  ={
    appUrl: PropTypes.string
}