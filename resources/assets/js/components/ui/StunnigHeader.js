import React from 'react';
import { NavLink} from 'react-router-dom'
const StunnigHeader = ({title,img}) => {
    return(
        <div>
            <div className="header-spacer" ></div>

            <div className={`stunning-header ${img}`}>
                <div className="stunning-header-content">
                    <h1 className="stunning-header-title">{title}</h1>
                    <ul className="breadcrumbs">
                        <li className="breadcrumbs-item">
                            <NavLink  to="/" >Home</NavLink>
                            <i className="seoicon-right-arrow"></i>
                        </li>
                        <li className="breadcrumbs-item active">
                            <span href="#">{title}</span>
                            <i className="seoicon-right-arrow"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default StunnigHeader