import React, {Component} from 'react'
import CustomBreadcrumb from '../../Components/CustomBreadcrumb/index'
import {Steps} from 'antd'
const Step = Steps.Step;
export default class about extends Component{
    render(){
        // aler("hello")
        return(
            <div>
            <CustomBreadcrumb arr={['关于','关于我们']}/>

            <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
            </Steps>
            </div>
           
        )
    }
}