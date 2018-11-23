import React, { Component } from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
class Lowpowerbulb extends Component {
    render() {
        return (
            <div>
                <CustomBreadcrumb arr={['超炫系列','小功率灯泡']} />
                <h1>小功率灯泡</h1>
            </div>
        )
    }
}
export default Lowpowerbulb;