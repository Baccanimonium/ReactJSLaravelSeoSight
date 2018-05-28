import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadCategories, loadCases} from "../../../../actionCreators/index"
import CaseItem from './CaseItem'
import { NavLink} from 'react-router-dom'

class Cases extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemsPerPage: 5,
        }
    }
    componentWillMount(){
        const { dispatchLoadCases,dispatchLoadCategories,categories,cases} = this.props
        if (!categories.loaded && !categories.loading) dispatchLoadCategories()
        if (!cases.loaded && !cases.loading) dispatchLoadCases()
    }
    // getPaginator() {
    //     const {total} = this.props
    //
    // }
    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            window.scrollTo(0, 450)
        }
    }

    render() {
        const {categories} = this.props.categories
        const {cases} = this.props.cases
        const {page,filter}=this.props.params
        //init filiter
        const allProjects= <li className="cat-list__item"><NavLink
            to={filter === 'all_projects'?`/case_studies/${page}/all_projects`: `/case_studies/1/all_projects` }
            activeClassName="activeLi"
            >All Projects</NavLink></li>
        const rowCategories =categories.map((child, index) => (
            <li className="cat-list__item" key={index} >
                <NavLink to={filter === child.url? `/case_studies/${page}/${child.url}`:`/case_studies/1/${child.url}`} activeClassName="activeLi">
                    {child.name}
                    </NavLink>
            </li>
        ))
        //init items
        const filteredCases = filter === 'all_projects'? cases : cases.filter(item=>item.cat.includes(filter))
        const rows = filteredCases.reduce((acc, el, i) => {
            if(i === 0 || i % this.state.itemsPerPage === 0) acc.push([])
            acc[acc.length-1].push(el)
            return acc
        }, [])
        //init pagination
        const items = []
        for (let i = 1; i <= Math.floor((filteredCases.length - 1) / this.state.itemsPerPage) + 1; i++) {
            items.push(<div className="page-numbers bg-border-color" style={{display:'inline-block',
                margin: '0 12px 0 0',
                width: '60px',
                height: '60px',
                lineHeight: '60px',
                textAlign: 'center',
                border: '2px solid transparent',
                textTransform: 'uppercase',
                color: '#acacac',
                fontSize: '20px',
                borderRadius:'100%'
            }} key={i}><NavLink to={`/case_studies/${i}/${filter}`}  activeClassName="current">{i}</NavLink></div>)
        }
        const prevPage =page-1
        const nextPage =prevPage +2
        return (
            <div className="container">
                <div className="row medium-padding120" >
                    <div className="col-lg-12">
                        <div className="heading align-center">
                            <h4 className="h1 heading-title">We Help Over 80 Companies</h4>
                        </div>
                        <ul className="cat-list align-center sorting-menu">
                            {allProjects}
                            {rowCategories}
                        </ul>
                        <div className="row sorting-container flexRow" data-layout="fitRows">
                            {rows.length? rows[page-1].map((child, index) => (
                                <CaseItem  key={index} i={index} data={child} appUrl={this.context.appUrl}/>
                            )):''}
                        </div>

                        <div className="row">

                            <div className="col-lg-12">

                                <nav className="navigation align-center">
                                    {prevPage ===0 ? '':
                                        <div href="#" className="page-numbers prev">
                                            <NavLink to={`/case_studies/${prevPage}/${filter}`}>
                                            <svg className="btn-prev">
                                                <use xlinkHref="#arrow-left" ></use>
                                            </svg>
                                            </NavLink>
                                        </div>
                                    }
                                    {items}
                                    {nextPage > rows.length ? '':
                                        <div href="#" className="page-numbers next">
                                            <NavLink to={`/case_studies/${nextPage}/${filter}`}>
                                            <svg className="btn-next">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                            </NavLink>
                                        </div>
                                    }

                                </nav>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        categories: state.categories,
        cases: state.cases
    }
}
const mapToDispatch ={
    dispatchLoadCategories: loadCategories,
    dispatchLoadCases: loadCases
}



export default connect(mapStateToProps, mapToDispatch)(Cases)

Cases.contextTypes ={
    appUrl: PropTypes.string
}