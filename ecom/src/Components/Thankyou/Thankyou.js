import React from "react";
import Headers from "../Headers/Headers";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css";

export default function Thankyou({ cart, shippingData,setShippingData }) {
  const naviagte = useNavigate();

  const handleThankyou=()=>{
    setShippingData({})
    naviagte("/")
  }
  return (
    <>
      <Headers cart={cart} />
      <div className="thankyou-component">
        <h2>Dear {shippingData.userName},Thank you for shopping with us..!</h2>
        <h4>Your Order will be delivered within 2 days at</h4>
        <p>{shippingData.userAddress}</p>
        <h4>
          Our Delivery Executive will call you on {shippingData.userNumber}
        </h4>

        <div>
          <button
            onClick={handleThankyou}
            style={{
              backgroundColor: "aquamarine",
              border: "none",
              borderRadius: "30px",
              padding: "10px 10px",
              margin: "0px 5px 0px 0px",
              cursor: "pointer",
              fontWeight:"600"
            }}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </>
  );
}
