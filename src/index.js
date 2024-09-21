import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header/header';
import Activity from './components/activity/activity';
import Info from './components/Info/Info';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Coms from './components/coms/coms';
import Pricing from './components/Pricing/Pricing';
import Doctor from './components/Options/Options';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Activity/>
    <Info/>
    <Doctor/>
    <Pricing/>
    <Coms/>
    <Form />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
