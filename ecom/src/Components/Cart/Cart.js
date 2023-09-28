import React, { useEffect, useState } from "react";
import Headers from "../Headers/Headers";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const [bill, setBill] = useState(0);
  const naviagte = useNavigate();

  const handleDelete=(data)=>{
    let updatedData = cart.filter((item)=>item.id!==data.id)
    setCart(updatedData)
  }

  const handleIncrease=(data)=>{
    let exist = cart.find((item)=>item.id===data.id)
    if(exist){
        let updatedData = cart.map((item)=>item.id===data.id ? {...exist,qty:exist.qty+1}:item)
        setCart(updatedData)
    }
  }

  const handleDecrease=(data)=>{
    let exist = cart.find((item)=>item.id===data.id)
    if(exist){
        let updatedData = cart.map((item)=>item.id===data.id ? {...exist,qty:exist.qty-1}:item)
        setCart(updatedData)
    }
    if(exist.qty===1){
        let updatedData = cart.filter((item)=>item.id!==data.id)
        setCart(updatedData)
    }
  }

  const handlePayment=()=>{
    if(cart.length>0){
        naviagte("/checkout")
    }
    else{
        alert("Add Items to Cart")
    }
  }

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + Number(cart[i].price * cart[i].qty);
    }
    setBill(sum);
  }, [cart]);
  return (
    <>
      <div className="cart-header">
        <Headers onPage={"cart"} cart={cart}/>
      </div>
      <div className="cart-container">
        <div className="cartleft-section">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {cart.length === 0 ? (
                <h3>Cart is Empty</h3>
              ) : (
                cart.map((item, index) => {
                  return (
                    <Grid item xs={12} md={6} s={12} key={index}>
                      <div className="cart-cards">
                        <div className="cart-image">
                          <img
                            src={item.images[1]}
                            alt={item.brand}
                            style={{
                              width: "300px",
                              height: "200px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div
                          className="cart-detail"
                          style={{ fontSize: "16px", fontWeight: "500" }}
                        >
                          <div>{item.title}</div>
                          <div>${item.price * item.qty}</div>
                        </div>
                        <div className="cart-counter">
                          <button
                            style={{
                              backgroundColor: "aquamarine",
                              border: "none",
                              borderRadius: "30px",
                              padding: "0px 10px",
                              margin: "0px 5px 0px 0px",
                              cursor: "pointer",
                            }}
                            onClick={()=>handleDecrease(item)}
                          >
                            -
                          </button>
                          Qty:{item.qty}
                          <button
                            style={{
                              backgroundColor: "aquamarine",
                              border: "none",
                              borderRadius: "30px",
                              padding: "0px 10px",
                              margin: "0px 5px",
                              cursor: "pointer",
                            }}
                            onClick={()=>handleIncrease(item)}
                          >
                            +
                          </button>
                        </div>
                        <div className="cart-delete">
                          <button
                            style={{
                              backgroundColor: "red",
                              border: "none",
                              borderRadius: "30px",
                              padding: "5px 10px",
                              margin: "5px 0px 0px 0px",
                              cursor: "pointer",
                            }}
                            onClick={()=>handleDelete(item)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Box>
        </div>
        <div className="cartright-section">
          <div className="billing-card">
            <div style={{ fontWeight: "500" }}>Total Price ${bill}</div>
            <div>
              <button
                style={{
                  backgroundColor: "aquamarine",
                  border: "none",
                  borderRadius: "30px",
                  padding: "10px 10px",
                  margin: "0px 5px 0px 0px",
                  cursor: "pointer",
                  fontWeight:"600"
                }}
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
