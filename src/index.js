import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { LocaleProvider, message } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { BrowserRouter } from 'react-router-dom'
import store from './Store/index'
//检测bug
import fundebug from 'fundebug-javascript'
//绑定key值
fundebug.apikey = "b30f92b2cfc3fcb46c375c1021887f35b2509acb5b9c7152af46ff258736875e";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: false });
      // 将component中的报错发送到Fundebug
      fundebug.notifyError(error, {
        metaData: {
          info: info
        }
      });
    }
  
    render() {
      if (this.state.hasError) {
        // return null
            
        // 也可以在出错的component处展示出错信息
        return message.error('出错了');
      }
      return this.props.children;
    }
  }
  
ReactDOM.render(
    <ErrorBoundary>
    <BrowserRouter >
        <LocaleProvider locale={zh_CN}>
            <Provider {...store}>
                <App />
            </Provider>
        </LocaleProvider>
    </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root'));
serviceWorker.unregister();
