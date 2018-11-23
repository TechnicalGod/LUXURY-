import React, {Component} from 'react'
import CustomBreadcrumb from '../../../Components/CustomBreadcrumb/index'
export default class Lowwerdownlamp extends Component{
    render(){
        return(
            <div>
                 <CustomBreadcrumb arr={['钻石筒灯','小功率筒灯']}/>
                 <h1>小功率筒灯</h1>
            </div>
          
        )
    }
}