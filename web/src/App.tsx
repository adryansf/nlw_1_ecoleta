import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} position={'top-right'} />
    </>
  );
}

export default App;
