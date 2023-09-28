import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import Checkout from "./Components/Checkout/Checkout";
import Thankyou from "./Components/Thankyou/Thankyou";

function App() {
  const [cart,setCart]=useState([])
  const [shippingData,setShippingData]=useState({userName:"",userEmail:"",userNumber:"",userAddress:""})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} shippingData={shippingData} setShippingData={setShippingData}/>} />
        <Route path="/thankyou" element={<Thankyou cart={cart} shippingData={shippingData} setShippingData={setShippingData}/>} />
      </Routes>
    </div>
  );
}

export default App;
