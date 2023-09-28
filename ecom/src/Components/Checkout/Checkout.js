import React from "react";
import Headers from "../Headers/Headers";
import './Checkout.css'
import { useNavigate } from "react-router-dom";

export default function Checkout({cart,setCart,shippingData,setShippingData}) {
    const navigate = useNavigate()

  const handleFormData = (event) => {
    setShippingData({...shippingData,[event.target.name]:event.target.value})
  };
//console.log(shippingData)
const handeFormSubmit = (event)=>{
    event.preventDefault();
    console.log(shippingData)
    setCart([])
    navigate("/thankyou")
}
  return (
    <>
      <Headers cart={cart}/>
      <div className="shippingAddress" style={{textAlign:"center"}}><h2>Add Shipping Address</h2></div>
      <div className="checkout-container">
        <div>
          <form onSubmit={handeFormSubmit} className="form-elements">
            <div>
              Name:{" "}
              <br></br>
              <input
                type="text"
                placeholder="Enter Name"
                name="userName"
                value={shippingData.userName}
                onChange={handleFormData}
                 required
              />
            </div>
            <div>
              Email:{" "}
              <br></br>
              <input
                type="email"
                placeholder="Enter Email"
                name="userEmail"
                value={shippingData.userEmail}
                onChange={handleFormData}
                required
              />
            </div>
            <div>
              Mobile Number:{" "}
              <br></br>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                name="userNumber"
                value={shippingData.userNumber}
                onChange={handleFormData}
                required
              />
            </div>
            <div>
              Address:{" "}
              <br></br>
              <input
                type="text"
                placeholder="Enter Address"
                value={shippingData.userAddress}
                onChange={handleFormData}
                name="userAddress"
                required
              />
            </div>
            <div>
              <input type="submit" style={{backgroundColor: "aquamarine",
                  border: "none",
                  borderRadius: "30px",
                  padding: "10px 10px",
                  margin: "0px 5px 0px 0px",
                  cursor: "pointer",
                  fontWeight:"500"}}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
