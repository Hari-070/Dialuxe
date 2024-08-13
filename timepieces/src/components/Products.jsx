import React, { useState } from 'react'
import {times} from '../../products.js'
import './product.css'
import {types} from '../../products1.js'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, increament, setWatch } from '../redux/cartSlice.js'
import { useNavigate } from 'react-router-dom'
import {message} from 'antd'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'

const Products = (props) => {
  const navigate=useNavigate()
  const [watches,setWatches]=useState(times)
  const [search,setSearch]=useState('')
  const [genre,setGenre]=useState('')
  console.log(genre)
  const cart=useSelector((state)=>state.cart.cart)
  console.log(cart)

  const dispatch=useDispatch()

  const handleCart=(item)=>{
    if(cart.find((items)=>items.id===item.id)){
      dispatch(increament(item))
      message.success("added to cart")
    }
    else{
      dispatch(addCart(item))
      message.success("added to cart")

  }}

  const handleBuy=(item)=>{
    dispatch(setWatch(item))
    navigate("/watch/"+item.id)
  }
 
  return (
    <>
    <h1 style={{textAlign:"center",margin:"40px 0 10px 0"}}>Our Latest Collection</h1>
    <h1 style={{textAlign:"center",margin:"15px"}}>In</h1>
    <div style={{width:"100%",display:"flex",justifyContent:"center",marginBottom:"40px"}}>
    <img src='../src/assets/cato.png' alt='logo' width="300px"/>
    </div>
    <div className='search_cont'>
      <h3>Search :</h3>
      <input type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
        <option value="">Categories</option>
        {types.map((item)=>(
            <option value={item.type}>{item.type}</option>
        ))}
      </select>
    </div>
      <div className='watch_cont'>
        {watches.filter((item)=>(
          genre===''?item:item.type.toLowerCase().includes(genre.toLowerCase())
        )).filter((item)=>(
          search===''?item:item.brand.toLowerCase().includes(search.toLowerCase())
        )).map((item)=>(
          <div className='watch_card'>
            <div className='watch_img'>
                <img src={item.image} width="100%" />
            </div>
            <hr style={{width:"80%",alignSelf:"center",marginTop:"10px"}}></hr>
            <div className='watch_details'>
              <h4>Brand: <span style={{fontSize:"15px",fontWeight:"500"}}>{item.brand}</span></h4>
              <h4>Model: <span style={{fontSize:"15px",fontWeight:"500"}}>{item.model}</span></h4>
              <h4>Price: <span style={{fontSize:"15px",fontWeight:"500"}}> ${item.price-item.price*0.1} <span style={{color:"green",fontSize:"12px"}}>(-10%off)</span></span></h4>
              <h4>MRP: <span style={{fontSize:"15px",fontWeight:"500"}}><s style={{fontSize:"13px",color:"red"}}>${item.price}</s></span></h4>
            </div>
            <div className='watch_btn'>
            <button onClick={()=>handleCart(item)}>Add to Cart</button>
            <button onClick={()=>handleBuy(item)}>View Details</button>
            </div>
          </div>
        ))}
       
      </div>
      {props.isLogin?<Login setIsLogin={props.setIsLogin}/>:""}
    </>
  )
}

export default Products
