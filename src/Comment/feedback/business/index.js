import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class business extends Component{
    render(){
        return(
            <div>
            <CustomBreadcrumb arr={['反馈','反馈到商家']}/>
            <h1>反馈</h1>
            </div>
        )
    }
}