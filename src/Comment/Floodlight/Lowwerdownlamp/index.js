import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class Lowwerdownlamp extends Component{
    render(){
        return(
            <div>
            <CustomBreadcrumb arr={['二代系列','小功率泛光灯']}/>
            <h1>各类小功率泛光灯</h1>
            </div>
        )
    }
}