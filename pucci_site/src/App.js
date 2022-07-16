import React, { useState, useEffect } from 'react';
import './App.css';

import Modal from 'react-modal';
import LoginPage from './components/Login Page/LoginPage';
import RegisterPage from './components/Register Page/RegisterPage';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import MailService from './services/mail.service';
import UserService from './services/user.service';
import OrderService from './services/order.service';
import ProductService from './services/product.service';
Modal.setAppElement('#root');

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  // let products = [];
  // let product1 = ProductService.createProduct("Blue Sweater", 400);
  // let product2 = ProductService.createProduct("Blue Sweater", 400);
  // products.push(product1);
  // products.push(product2);

  ProductService.getAllProducts();

  // const [products, setProducts] = useState([];
  //   const fetchProducts = async() => {
  //     const {data} = await commerce.products.list();

  //     setProducts(data);

  //   }

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  //   console.log(products);

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegister = () => {
    setRegister(!register);
  }

  const openRegisterPage = () => {
    setIsOpen(false);
    setRegister(true);
  };

  return (
    <div className="App">

      <BrowserRouter>
        <Header 
          onLoginClick={toggleLogin}
          onRegisterClick={toggleRegister}
        />

        {isOpen &&
          <LoginPage
            onRegisterClick={openRegisterPage}
            modalIsOpen={isOpen}
            handleClose={toggleLogin}
          />
        }

        {register &&
          <RegisterPage
            modalIsOpen={register}
            handleClose={toggleRegister}
          />
        }

        <Home />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
