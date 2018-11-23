import React, { Component } from 'react';
import './App.css';
import Index from './Router/Index/index'
import {Route,Switch} from 'react-router-dom'
//登录
import Login from './Router/Login/index'
//路由懒加载
import PrivateRoute from './Components/PrivateRoute'
class App extends Component {
  render() {
    return (
      <div>
      <Switch >
      <Route path="/login" component={Login}></Route>
        <PrivateRoute path='/' component={Index}></PrivateRoute>
      </Switch>
      </div>
     
    );
  }
}

export default App;
