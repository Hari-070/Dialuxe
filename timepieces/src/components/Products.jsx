import React, { useEffect, useState } from 'react'
import {times} from '../../products.js'
import './product.css'
import {types} from '../../products1.js'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, increament, setWatch, setWatches } from '../redux/cartSlice.js'
import { useNavigate } from 'react-router-dom'
import {message} from 'antd'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import axios from 'axios'
import Loader from './Loader.jsx'
import toast from 'react-hot-toast'

const Products = (props) => {
  const navigate=useNavigate()
  const watches=useSelector((state)=>state.cart.watches)

  const [search,setSearch]=useState('')
  const [type,setType]=useState('')
  const [loading,setLoading]=useState(false)
  // console.log(genre)
  const cart=useSelector((state)=>state.cart.cart)
  console.log(cart)

  const dispatch=useDispatch()

  const handleCart=async(item)=>{
    try {
      await axios.post('https://dialuxe.onrender.com/cart/addtocart',{product_id:item.id,quantity:1},{headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }})
      .then(res=>{
        toast.success("added to cart")
      //   if(cart.find((items)=>items.id===item.id)){
      //     dispatch(increament(item))
      //     toast.success("added to cart")
      //   }
      //   else{
      //     dispatch(addCart(item))
      //     toast.success("added to cart")
      // }
        
       })
    } catch (error) {
      console.log(error)
      toast.error(error.response.data)
        if(cart.find((items)=>items.id===item.id)){
          dispatch(increament(item))
          toast.success("added to cart")
        }
        else{
          dispatch(addCart(item))
          toast.success("added to cart")
      }
    }
    }

  const handleBuy=(item)=>{
    // dispatch(setWatch(item))
    navigate("/watch/"+item.id)
  }

  
  useEffect(()=>{
    const getP=async()=>{
      setLoading(true)
      await axios.get("https://dialuxe.onrender.com/products/allProducts")
      .then(res=>{
        // setWatches(res.data)
        dispatch(setWatches(res.data))
        setLoading(false)
      })
    }
    getP()
  },[])

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
      <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option value="">All</option>
        {types.map((item)=>(
            <option value={item.type}>{item.type}</option>
        ))}
      </select>
    </div>
      <div className='watch_cont'>
        { loading?<Loader/>:watches.filter((item)=>(
          type===''?item:item.type.toLowerCase()===type.toLowerCase()
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
