import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-dom'
import counter from './counter'
import article from './article'
import cases from './cases'
import prices from './prices'
import slides from './slides'
import testimonials from './testimonials'
import blog from './blog'
import clientsCompany from './clientsCompany'
import categories from './categories'
import auth from './auth'

export default combineReducers({
     counter, article, cases, prices, slides,testimonials,blog, clientsCompany,categories, auth
})