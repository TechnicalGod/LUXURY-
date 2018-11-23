import React, { Component } from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class LowPowerbulb extends Component {
    render() {
        return (
            <div>
                <CustomBreadcrumb arr={['超炫系列','小功率灯泡']} />
                <h1>大功率灯泡</h1>
            </div>
        )
    }
}