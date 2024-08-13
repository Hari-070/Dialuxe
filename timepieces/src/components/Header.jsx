import React, { useState } from 'react'
import './product.css'
import { useSelector } from 'react-redux'
import { HiShoppingCart } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate=useNavigate()
  const cartItems=useSelector((state)=>state.cart.cart)
   
  const handleCart=()=>{
    navigate("/cart")
  }
  return (
    <>
      <div className='header_cont'>
        <div onClick={()=>navigate("/landing")} style={{cursor:"pointer"}}>
            <img src='../src/assets/logo.png' style={{marginLeft:"20px"}} width="200px"/>
        </div>
        <div className='header_2'>
            <h3 onClick={()=>navigate("/")} >Products</h3>
            <h3 onClick={()=>navigate("/landing")} >About</h3>
            <h3 onClick={handleCart} ><HiShoppingCart style={{fontSize:"20px"}}/>  <span style={{fontSize:"17px",fontWeight:"500"}}>{cartItems.length}</span></h3>
            <h3 onClick={()=>props.setIsLogin(true)} ><CgProfile style={{fontSize:"30px"}}/></h3>
            {/* <h3 onClick={()=>navigate("/login")} style={{cursor:"pointer"}}>Login</h3> */}
        </div>
      </div>
    </>
  )
}

export default Header
