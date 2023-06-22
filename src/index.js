import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import { Provider } from 'react-redux'
// Dùng để bọc ngoài để cho react khởi động cùng với redux
//Provider hàm của react và redux
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import rootReducer1 from './store/reducers/rootReducer';


const reduxStore = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// store nơi lưu trữ dữ liệu của redux, reduxStore dữ liệu nào vào store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
