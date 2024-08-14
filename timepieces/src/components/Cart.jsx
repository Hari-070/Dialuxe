import React, { useState,useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../redux/cartSlice'
import './cart.css'
import CartProduct from './CartProduct'
import Footer from './Footer'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loader from './Loader'

const Cart = () => {

    const carts=useSelector((state)=>state.cart.cart)
    const [cart,setCart]=useState(carts)
    const [totPrice,setTotPrice]=useState(0)
    const [loading,setLoading]=useState(false)
    const delivery=10
    const dispatch=useDispatch()

    

    useEffect(() => {
        const getC=async()=>{
          setLoading(true)
          try {
            await axios.get("https://dialuxe.onrender.com/cart/get",{
              headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
              }
            })
            .then(res=>{
              setCart(res.data)
              // dispatch(setCart(res.data))
              setLoading(false)
            })
          } catch (error) {
            console.log(error)
            toast.error(error.response.data)
            // setCart(carts)
            setLoading(false)
          }
        }
        getC();
        let total=0
        carts.forEach((item)=>(
          total+=(item.price*item.quantity)
        ))
        setTotPrice(total)
      }, [carts])

    
        return (
      <div>
        <Header/>
        <h1 style={{marginTop:"20px"}}>Cart Items:</h1>
        <div className='cart_main'>
  
        
          <div className='cart_part'>
            {loading?<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Loader/></div>:
            cart.map((item)=>(
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
