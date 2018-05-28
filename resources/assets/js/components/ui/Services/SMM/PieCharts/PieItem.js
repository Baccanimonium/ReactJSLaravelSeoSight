import React from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import Counter from '../../../../decorators/Counter'
import {meterColorStyle} from '../../../../../helpers/switchColorStyle'

const PieItem = (pieData) => {
    const {title, text} = pieData.data
    const {dataCount ,countToFixed,i} = pieData
    return(
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="pie-chart-item">
                <div style={{ width: "160px", float: 'left', marginRight: '30px', fill:'black' }}>
                    <CircularProgressbar percentage={countToFixed(dataCount)} styles={{
                        path: { stroke: meterColorStyle(i)  },
                    }} strokeWidth={5} />
                </div>
                <div className="pie-chart-content">
                    <h4 className="pie-chart-content-title">{title}</h4>
                    <p className="pie-chart-content-text">{text}
                    </p>
                    <a href="#" className="more">Read More
                        <i className="seoicon-right-arrow"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Counter(PieItem)
