
import React from 'react'
import CustomMenu from '../CustomMenu/index'

const menus = [
  {
    title: '佛山照明首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '超炫系列球泡',
    icon: 'laptop',
    key: '/SuperSeriesbulbs',
    subs: [
      { key: '/SuperSeriesbulbs/Highpowerbulb', title: '超炫大功率球泡', icon: '', },
      { key: '/SuperSeriesbulbs/Lowpowerbulb', title: '超炫小功率球泡', icon: '', },
    ]
  },
  {
    title: '超炫系列灯泡',
    icon: 'bars',
    key: '/SuperSeriesbulbB',
    subs: [
      { key: '/SuperSeriesbulbB/hthighPowerbulb', title: '超炫大功率球泡', icon: '' },
      { key: '/SuperSeriesbulbB/LowPowerbulb', title: '超炫小功率球泡', icon: '' }
    ]
  },
  {
    title: '钻石筒灯',
    icon: 'edit',
    key: '/Diamondtubelamp',
    subs: [
      { key: '/Diamondtubelamp/Highpowerdownlamp', title: '各类大功率筒灯', icon: '' },
      { key: '/Diamondtubelamp/Lowwerdownlamp', title: '各类小功率筒灯', icon: '' }
    ]
  },
  {
    title: '二代系列泛光灯',
    icon: 'desktop',
    key: '/Floodlight',
    subs: [
      { key: '/Floodlight/Highpowerdownlamp', title: '各类大功率泛光灯', icon: '' },
      { key: '/Floodlight/Lowwerdownlamp', title: '各类小功率泛光灯', icon: '' },
      { key: '/Floodlight/Sizeorder', title: '大小定做', icon: '' }
    ]
  },
  {
    title: '反馈',
    icon: 'message',
    key: '/feedback',
    subs: [
      { key: '/feedback/business', title: '反馈到商家', icon: '', }
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus} />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav