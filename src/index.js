import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const page = (
  <div>
    <img src="./public/logo192.png" width="40px"/>
    <ul>
      <li>Thing 1</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

  </div>
)
ReactDOM.render(page. document.getElementById("root"))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
