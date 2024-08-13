import React, { useState,useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../redux/cartSlice'
import './cart.css'
import CartProduct from './CartProduct'
import Footer from './Footer'

const Cart = () => {

    const cart=useSelector((state)=>state.cart.cart)
    const [totPrice,setTotPrice]=useState(0)
    const delivery=10
    const dispatch=useDispatch()

    useEffect(() => {
        let total=0
        cart.forEach((item)=>(
          total+=(item.price*item.quantity)
        ))
        setTotPrice(total)
      }, [cart])

    
        return (
      <div>
        <Header/>
        <h1 style={{marginTop:"20px"}}>Cart Items:</h1>
        <div className='cart_main'>
  
        
          <div className='cart_part'>
            {cart.map((item)=>(
                <CartProduct item={item}/>
            ))}
          </div>
          
          <div className='cart_check'>
              <div className='cart_check_box'>
                <div className='cart_check_head'>
                  <h1>Price Details</h1>
                </div>
                <hr></hr>
                <div className='cart_check_body'>
                  <h3>Subtotal: ${totPrice} <br/><span style={{fontWeight:"200",fontSize:"15px"}}>({cart.length} items)</span></h3>
                  
                  <h3>Delivery Fees: <span style={{fontSize:"15px",fontWeight:"400"}}>${delivery}</span></h3>
                  <h3>Total: <span style={{fontSize:"15px",fontWeight:"400"}}>${delivery+totPrice}</span></h3>
                  <button>Checkout</button>
                </div>
              </div>
          </div>
        
  
        </div>
        <Footer/>
        
      </div>
    )
}

export default Cart
