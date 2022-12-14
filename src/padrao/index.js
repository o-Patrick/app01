import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// usando react router dom
// import {BrowserRouter} from 'react-router-dom';

// a função tick demonstra, por meio de um relógio, como o react apenas renderiza atualizações
// function tick(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // usando react-router-dom
    // <BrowserRouter>
    //   <App/>
    // </BrowserRouter>
    // padrão:
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
// }
// setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
