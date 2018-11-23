import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

//佛山照明首页
const Home = LoadableComponent(() => import('../../Comment/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

//   超炫系列球泡 SuperSeriesbulbs
//  1.大功率球泡  Highpowerbulb
//  2.小功率球泡  Lowpowerbulb
const Highpowerbulb = LoadableComponent(() => import('../../Comment/SuperSeriesbulbs/Highpowerbulb/index'))
const Lowpowerbulb = LoadableComponent(() => import('../../Comment/SuperSeriesbulbs/Lowpowerbulb/index'))

//   超炫系列灯泡 Diamond tube lamp
//  1.大功率灯泡  hthighPowerbulb
//  2.小功率灯泡  LowPowerbulb
const hthighPowerbulB = LoadableComponent(() => import('../../Comment/SuperSeriesbulbB/hthighPowerbulB/index'))
const LowPowerbulB = LoadableComponent(() => import('../../Comment/SuperSeriesbulbB/LowPowerbulB/index'))

// Diamond tube lamp
//   钻石筒灯     Diamondtubelamp
//  1.大功率筒灯  Highpowerdownlamp
//  2.小功率筒灯  Lowwerdownlamp
const Highpowerdownlamp = LoadableComponent(() => import('../../Comment/Diamondtubelamp/Highpowerdownlamp/index'))
const Lowwerdownlamp = LoadableComponent(() => import('../../Comment/Diamondtubelamp/Lowwerdownlamp/index'))

//  二代系列泛光灯 Floodlight
//  1.大功率筒灯  Highpowerdownlamp
//  2.小功率筒灯  Lowwerdownlamp
//  3.大小定做    Sizeorder

const HighpowerdownlamP = LoadableComponent(() => import('../../Comment/Floodlight/Highpowerdownlamp/index'))
const LowwerdownlamP = LoadableComponent(() => import('../../Comment/Floodlight/Lowwerdownlamp/index'))
const HighpowerdownlamPP = LoadableComponent(() => import('../../Comment/Floodlight/Sizeorder/index'))


//  反馈 feedback
const business = LoadableComponent(() => import('../../Comment/feedback/business/index'))

//关于  about
const About = LoadableComponent(() => import('../../Comment/about/index'))

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <div style={{ padding: 16, position: 'relative' }}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          {/* 超炫系列球泡 SuperSeriesbulbs */}
          <PrivateRoute exact path='/SuperSeriesbulbs/Highpowerbulb' component={Highpowerbulb} />
          <PrivateRoute exact path='/SuperSeriesbulbs/Lowpowerbulb' component={Lowpowerbulb} />
          {/* 超炫系列灯泡 Diamond tube lamp */}
          <PrivateRoute exact path='/SuperSeriesbulbB/hthighPowerbulb' component={hthighPowerbulB} />
          <PrivateRoute exact path='/SuperSeriesbulbB/LowPowerbulb' component={LowPowerbulB} />
          {/* 钻石筒灯 Diamond tube lamp */}
          <PrivateRoute exact path='/Diamondtubelamp/Highpowerdownlamp' component={Highpowerdownlamp} />
          <PrivateRoute exact path='/Diamondtubelamp/Lowwerdownlamp' component={Lowwerdownlamp} />
          {/* 二代系列泛光灯 Floodlight */}
          <PrivateRoute exact path='/Floodlight/Highpowerdownlamp' component={HighpowerdownlamP} />
          <PrivateRoute exact path='/Floodlight/Lowwerdownlamp' component={LowwerdownlamP} />
          <PrivateRoute exact path='/Floodlight/Sizeorder' component={HighpowerdownlamPP} />
          {/* 反馈 feedback */}
          <PrivateRoute exact path='/feedback/business' component={business} />
          {/* 关于  about */}
          <PrivateRoute exact path='/about' component={About} />
          {/*  重定向 默认为首页  */}
          <Redirect exact from='/' to='/home' />
        </Switch>
      </div>
    )
  }
}

export default ContentMain