import React from 'react';
import DonutChart from 'react-donut-chart'
import {meterColorStyle} from "../../../../helpers/switchColorStyle"
const Chart = (data) => {

    const parsedResults =  JSON.parse(data.results)
    const parsedChartData = JSON.parse(data.chartData)
    const splitChartData =parsedChartData.map((child, index) => (
        child.split('-')
    ))
    const donutData =splitChartData.map((child, index) => (
        {

            label: child[0],
            value: +child[1]
        }
    ),)
    return(
        <div className="container-fluid">
            <div className="row medium-padding120 bg-border-color">
                <div className="container">
                    <div className="row">
                        <div className="seo-results">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="seo-results-thumb">
                                    <DonutChart
                                        data={donutData}
                                        height={360}
                                        width={360}
                                        innerRadius={0.5}
                                        legend={false}
                                        colors={['#4cc2c0', '#fcb03b', '#3cb878', '#f15b26']}
                                    />

                                    <div className="points">
                                        {splitChartData.map((child, index) => (
                                            <div key={index} className="points-item">
                                                <div className="points-item-count">
                                                    <span className="point-sircle" style={{backgroundColor:meterColorStyle(index)}} ></span>{child[1]}% -{' '}
                                                    <span className="c-gray">{ child[0]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-lg-offset-1 col-md-7 col-md-offset-1 col-sm-12 col-xs-12">
                                <div className="seo-results-content">

                                    <div className="heading">
                                        <h4 className="h1 heading-title">Results</h4>
                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>
                                        <p>{data.text}
                                        </p>
                                    </div>
                                    <div className="results">
                                        {parsedResults.map((child, index) => (
                                        <div key={index} className="results-item">
                                            <i className="seoicon-hit-target "></i>
                                            <div className="results-item-info">
                                                {child}
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart