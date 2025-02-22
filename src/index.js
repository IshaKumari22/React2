import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
import{
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue
}from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RecoilRoot>

  <App />
  </RecoilRoot>
  </BrowserRouter>
  /* // <React.StrictMode> */
  /* // </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
