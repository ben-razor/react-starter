import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Logo from './images/logo-1.png';

const TOAST_TIMEOUT = 4000;

function App(props) {
  const { addToast } = useToasts();

  function toast(message, type='info') {
    addToast(message, { 
      appearance: type,
      autoDismiss: true,
      autoDismissTimeout: TOAST_TIMEOUT
    });
  }

  function drinkMe() {
    toast(<Fragment>
      <div>What a curious feeling!</div>
      <div>I must be shutting up like a telescope.</div>
    </Fragment>);
  }

  return (
    <div className="br-page">
      <div className="br-header">
        <img className="br-header-logo" alt="Ben Razor Head" src={Logo} />
        <h1>Welcome to REACT</h1>
      </div>
      <div className="br-content">
        <button className="br-button" onClick={drinkMe}>Drink Me</button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>
, document.getElementById('root'));