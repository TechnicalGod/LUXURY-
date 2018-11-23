import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class hthighPowerbulb extends Component{
    render(){
        return(
            <div>
                <CustomBreadcrumb arr={['超炫系列','小功率灯泡']} />
            <h1>小功率灯泡</h1>
            </div>
        )
    }
}