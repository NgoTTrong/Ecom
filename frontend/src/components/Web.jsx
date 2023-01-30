import React, {useState} from 'react'
import Body from './body/Body'
import Cart from './cart/Cart'
import Footer from './footer/Footer'
import Header from './header/Header'
import Login from './login/Login'
import Register from './register/Register'
import {Routes,Route} from 'react-router-dom';

const Web = () => {
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);
  return (
    <>
        <Header setLogin={setLogin}/>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        {isLogin && <Login setLogin={setLogin} setRegister={setRegister}/>}
        {isRegister && <Register setLogin={setLogin} setRegister={setRegister}/>}
        <Footer/>
    </>
  )
}

export default Web
