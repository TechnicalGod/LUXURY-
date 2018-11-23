import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class Highpowerdownlamp extends Component{
    render(){
        return(
            <div>
            <CustomBreadcrumb arr={['二代系列','大功率泛光灯']}/>
            <h1>各类大功率泛光灯</h1>
            </div>
        )
    }
}