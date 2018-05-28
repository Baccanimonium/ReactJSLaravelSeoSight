import React from 'react';
import { NavLink} from 'react-router-dom'

const CaseItem = (caseData) => {
    const {id,img,title,categories}=caseData.data
    const checkFirstTwoElements = caseData.i%8 ===0 || caseData.i%8 ===1
    return(
        <div className={checkFirstTwoElements ? "col-lg-6 col-md-6 col-sm-6 col-xs-12" : "col-lg-4 col-md-4 col-sm-6"} >
            <div className={checkFirstTwoElements ? "case-item align-center big mb60" : "case-item align-center mb60"}>
                <NavLink  to={`/case_studies/show/${id}`} >
                    <div className="case-item__thumb mouseover lightbox shadow animation-disabled">
                        <img src={`${caseData.appUrl}${img}`} alt="our case"/>
                    </div>
                    <h5 className="case-item__title">{title}</h5>
                </NavLink>
                <div className="case-item__cat">
                    {categories.map((child, index) => (
                        <a key={index}>{child.name}{index +1 === categories.length ? ' ':', '}</a>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CaseItem;
