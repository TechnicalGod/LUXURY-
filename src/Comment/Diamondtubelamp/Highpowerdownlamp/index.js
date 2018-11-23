import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class Highpowerdownlamp extends Component{
    render(){
        return(
            <div>
                <CustomBreadcrumb arr={['钻石筒灯','大功率筒灯']}/>
                <h1>大功率筒灯</h1>
            </div>
           
        )
    }
}