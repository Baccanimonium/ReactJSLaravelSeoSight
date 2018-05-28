import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Counter from '../../../../decorators/Counter'
import {meterColorStyle} from "../../../../../helpers/switchColorStyle"
class SkillsItem extends Component {
    render() {
        const {units, title}=this.props.data
        const {dataCount, renderParam, countToFixed,i} = this.props
        const style1 = {
            width: `${dataCount}%`,
            opacity: renderParam.viewed ? '1': '0',
            transition: `opacity ${renderParam.dataSpeed}ms`,
            backgroundColor: meterColorStyle(i+1),
            borderColor:meterColorStyle(i+1)
        }
        return (
            <div className="skills-item">
                <div className="skills-item-info">
                    <span className="skills-item-title">{title}</span>
                    <span className="skills-item-count">
                                                    <span className="count-animate">{countToFixed(dataCount)}</span>
                                                    <span className="units">{units}</span></span>
                </div>
                <div className="skills-item-meter">
                                        <span className="skills-item-meter-active bg-orange-color border-orange-color" style={style1}>
                                        </span>
                </div>
            </div>
        )
    }
}
export default Counter(SkillsItem)