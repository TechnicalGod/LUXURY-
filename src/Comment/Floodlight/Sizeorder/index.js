import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class Sizeorder extends Component{
    render(){
        return(
            <div>
            <CustomBreadcrumb arr={['二代系列','大小定做']}/>
            <h1>大小定做</h1>
            </div>
        )
    }
}