import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Headers.css";

export default function Headers({ cart, onPage }) {
  const naviagte = useNavigate();

  return (
    <>
    <div className="header">
      <div className="left-section" onClick={()=>naviagte("/")}>KD Shop</div>
      
      <div className="right-section">
        {onPage === "home" ? (
          <>
            <div onClick={()=>naviagte("/")}>Products</div>
            <div onClick={()=>naviagte("/cart")}>
              <MdShoppingCart />
              <sup>{cart.length}</sup>
            </div>
          </>
        ) : (onPage==="cart" ? 
          <>
            <div onClick={()=>naviagte("/")}>Products</div>
            <div>
              <MdShoppingCart />
              <sup>{cart.length}</sup>
            </div>
          </> : <>
          <div onClick={()=>naviagte("/")}>Products</div>
            <div onClick={()=>naviagte("/cart")}>
              <MdShoppingCart />
              <sup>{cart.length}</sup>
            </div>
          </>
        )}
      </div>
    </div>
    
  </>
  );
}
