import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom' 
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import Navbarrow from './components/Navbarrow';
import ErrorPage from './pages/ErrorPage';
 
ReactDOM.render(

  <BrowserRouter>
  <Navbarrow />
  <Navbar />
    <App />
    <Footer />
    </BrowserRouter>,

document.getElementById('root')
);

 