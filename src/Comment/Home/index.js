import React, {Component} from 'react'
import {Steps} from 'antd'
//提示组件
import * as echarts from 'echarts';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/toolbox';
// import 'echarts/lib/component/visualMap';
// // import '../../assets/js/echarts.min.js'
// //配置组件
// import echarts from 'echarts/lib/echarts';
// import  'echarts/lib/chart/line';
// import  'echarts/lib/chart/bar';
// import  'echarts/lib/chart/tree';
// script src="http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM"></script>
//样式
import './index.css'
const Step = Steps.Step;

 class Home extends Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('Monthlysalesvolume'));
        // 绘制图表（周）
        myChart1.setOption({
          
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['超炫系列球泡','超炫系列灯泡','钻石筒灯','二代系列泛光灯']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'超炫系列球泡',
                        type:'line',
                        stack: '总量',
                        symbol: 'none',
                        // itemStyle: {
                        //     normal: {
                        //         areaStyle: {
                        //             // 区域图，纵向渐变填充
                        //             color : (function (){
                        //                 var zrColor = require('zrender/tool/color');
                        //                 return zrColor.getLinearGradient(
                        //                     0, 200, 0, 400,
                        //                     [[0, 'rgba(255,0,0,0.8)'],[0.8, 'rgba(255,255,255,0.1)']]
                        //                 )
                        //             })()
                        //         }
                        //     }
                        // },
                        data:[
                            120, 132, 301, 134, 
                            {value:90, symbol:'droplet',symbolSize:5},
                            230, 210
                        ]
                    },
                    {
                        name:'超炫系列灯泡',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        symbol: 'image://../asset/ico/favicon.png',     // 系列级个性化拐点图形
                        symbolSize: 8,
                        data:[
                            120, 82,
                            {
                                value:201,
                                symbol: 'star',  // 数据级个性化拐点图形
                                symbolSize : 15,
                                itemStyle : { normal: {label : {
                                    show: true,
                                    textStyle : {
                                        fontSize : '20',
                                        fontFamily : '微软雅黑',
                                        fontWeight : 'bold'
                                    }
                                }}}
                            },
                            {
                                value:134,
                                symbol: 'none'
                            },
                            190, 
                            {
                                value : 230,
                                symbol: 'emptypin',
                                symbolSize: 8
                            },
                            110
                        ]
                    },
                    {
                        name:'钻石筒灯',
                        type:'line',
                        stack: '总量',
                        symbol: 'arrow',
                        symbolSize: 6,
                        symbolRotate: -45,
                        itemStyle: {
                            normal: {
                                color: 'red',
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'dashed'
                                }
                            },
                            emphasis: {
                                color: 'blue'
                            }
                        },
                        data:[
                            320, 332, '-', 334,
                            {
                                value: 390,
                                symbol: 'star6',
                                symbolSize : 20,
                                symbolRotate : 10,
                                itemStyle: {        // 数据级个性化折线样式
                                    normal: {
                                        color: 'yellowgreen'
                                    },
                                    emphasis: {
                                        color: 'orange',
                                        label : {
                                            show: true,
                                            position: 'inside',
                                            textStyle : {
                                                fontSize : '20'
                                            }
                                        }
                                    }
                                }
                            },
                            330, 320
                        ]
                    },
                    {
                        name:'二代系列泛光灯',
                        type:'line',
                        symbol:'emptyCircle',
                        itemStyle: {
                            // normal: {
                            //     lineStyle: {            // 系列级个性化折线样式，横向渐变描边
                            //         width: 2,
                            //         color: (function (){
                            //             var zrColor = require('zrender/tool/color');
                            //             return zrColor.getLinearGradient(
                            //                 0, 0, 1000, 0,
                            //                 [[0, 'rgba(255,0,0,0.8)'],[0.8, 'rgba(255,255,0,0.8)']]
                            //             )
                            //         })(),
                            //         shadowColor : 'rgba(0,0,0,0.5)',
                            //         shadowBlur: 10,
                            //         shadowOffsetX: 8,
                            //         shadowOffsetY: 8
                            //     }
                            // },
                            emphasis : {
                                label : {show: true}
                            }
                        },
                        data:[
                            620, 732, 791, 
                            {value:734, symbol:'emptyHeart',symbolSize:10},
                            890, 930, 820
                        ]
                    }
                ]
           
                                
        })

             // 绘制图表（月）
        var myChart2 = echarts.init(document.getElementById('Weeklysalesvolume'));
         
          myChart2.setOption({

               tooltip : {
                    trigger: 'axis'
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                // legend: {
                //     data:['蒸发量','降水量','平均温度']
                // },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name : '水量',
                        axisLabel : {
                            formatter: '{value} ml'
                        }
                    },
                    {
                        type : 'value',
                        name : '温度',
                        axisLabel : {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series : [
            
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name:'平均温度',
                        type:'line',
                        yAxisIndex: 1,
                        data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
                                  
          })


          var myChart3 = echarts.init(document.getElementById('income'));
        // 绘制图表（收入）
        myChart3.setOption({
            
                title: {
                    text: '总收入',
                    subtext: 'From ExcelHome',
                    sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var tar;
                        if (params[1].value != '-') {
                            tar = params[1];
                        }
                        else {
                            tar = params[0];
                        }
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                legend: {
                    data:['支出','收入']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        splitLine: {show:false},
                        data :  function (){
                            var list = [];
                            for (var i = 1; i <= 11; i++) {
                                list.push('11月' + i + '日');
                            }
                            return list;
                        }()
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'辅助',
                        type:'bar',
                        stack: '总量',
                        itemStyle:{
                            normal:{
                                barBorderColor:'rgba(0,0,0,0)',
                                color:'rgba(0,0,0,0)'
                            },
                            emphasis:{
                                barBorderColor:'rgba(0,0,0,0)',
                                color:'rgba(0,0,0,0)'
                            }
                        },
                        data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
                    },
                    {
                        name:'收入',
                        type:'bar',
                        stack: '总量',
                        itemStyle : { normal: {label : {show: true, position: 'top'}}},
                        data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
                    },
                    {
                        name:'支出',
                        type:'bar',
                        stack: '总量',
                        itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
                        data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
                    }
                ]
          })

          var myChart4 = echarts.init(document.getElementById('region'));
          // 绘制图表（地区）
          myChart4.setOption({
          
          })
    }
    render(){
        return(
            <div>

                <div className="Header">
                    <div className="HeaderLeft">
                        <h1><b>周销量</b></h1>
                        <div id="Monthlysalesvolume" style={{ width:1633, height: 400 }}></div>
                    </div>
                    <div className="HeaderRight">
                    <h1><b>月销量</b></h1>
                    <div id="Weeklysalesvolume" style={{ width: 1633, height: 400 }}></div>
                    </div>
                    <div className="HeaderRight">
                    <h1><b>收入</b></h1>
                    <div id="income" style={{ width: 1633, height: 400 }}></div>
                    </div>
                    <div className="HeaderRight">
                    <h1><b>地区发货分布</b></h1>
                    <div id="region" style={{ width: 1633, height: 400 }}></div>
                    </div>
                </div>

           </div>
        
        )
    }
}
export default Home;