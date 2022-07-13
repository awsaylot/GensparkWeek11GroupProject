import React, { useState, useEffect } from 'react';
import './App.css';

import Wrapper from './components/Wrapper/Wrapper';
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

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

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

  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <button onClick={toggleLogin}>Login</button>
        <button onClick={toggleRegister}>Register</button>

        {isOpen &&
          <Wrapper>
            <LoginPage
              handleClose={toggleLogin}
              content={
                <div>
                  <h2 style={{ fontWeight: 'bolder' }}>Sign In</h2>
                </div>
              }
            />
          </Wrapper>}

        {register &&
          <Wrapper>
            <RegisterPage
              handleClose={toggleRegister}
              content={
                <div>
                  <h2>New User</h2>
                  <p>Personal Information</p>
                </div>
              }
              content2={
                <div>
                  <p>Login Information</p>
                </div>
              }
            />
          </Wrapper>}

        <Home />
      </BrowserRouter>


      <Footer />
    </div>
  );
}

export default App;
