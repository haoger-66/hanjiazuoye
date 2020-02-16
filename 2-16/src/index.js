import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// es6 模块：*代表的是一个对象，它将文件
import * as serviceWorker from './serviceWorker';
/*
上行代码的解释：（es6模块）
  * ：代表的是serviceWorker.js 这个文件中向外暴露的所有模块
  as ：重命名  别名
 这句话的意思是它将文件（serviceWorker.js）中的所有需要暴露出来的模块都挂载到自身上（此时的serviceWorker是一个对象），然后可以通过serviceWorker.unregister();用点的方式把方法都拿出来
*/
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
