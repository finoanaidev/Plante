import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Search from './Search';
import Home from './Home';
import Cart from './Cart';
import {CartProvider} from 'react-use-cart';


function App() {
  return (
    <>
    <CartProvider>
    <Search/>
     <Home/> 
     <Cart/> 
     </CartProvider>
    </>
  );
}

export default App;
