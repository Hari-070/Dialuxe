import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import './product.css'
import { times } from '../../products'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'

const Watch = () => {
  const {productW}=useParams()
  // console.log(productW)
  const watches1=useSelector((state)=>state.cart.watches)
  const [watches,setWatches]=useState(watches1)
  const [watch,setWatch]=useState(null)
  const [img,setImg]=useState(null)
  const [loading,setLoading]=useState(true)
  // console.log(loading)

  useEffect(()=>{
    const getP=async()=>{
      try {
        await axios.get("https://dialuxe.onrender.com/products/allProducts")
        .then(res=>{
          setWatches(res.data)
        })
      } catch (error) {
        console.log(error)
      }
    }
    getP()
  //   console.log(watches)
  //   const prod=watches.find((item)=>(
  //     item.id===productW
  //   ))
  //   // console.log(prod);
  //   console.log("hello in watch");
  // if(prod){
  // setWatch(prod)
  // setImg(prod.image)
  // setLoading(false)
  // }
  },[])

  useEffect(()=>{
    const prod=watches.find((item)=>(
      item.id===productW
    ))
  console.log(prod);
    console.log("hello in watch");
  if(prod){
  setWatch(prod)
  setImg(prod.image)
  setLoading(false)
  }
  },[watches])



  
  // if(watch==null){
  //   return(
  //     <Loader/>
  //   )
  // }
  return (
    
    <div>
      {loading?<div style={{display:'flex',height:"100vh",justifyContent:"center",alignItems:"center"}}>
        <Loader/>
        </div>
      :<>
      <Header/>
      <div className='w_cont'>
        <div className='w_cont_img'>
          <img src={img}/>
        </div>
        <hr style={{fontWeight:"900",fontSize:"20px"}}></hr>
        <div className='w_cont_details'>
          <h1>{watch.model} <span style={{fontSize:"15px",color:"grey",fontWeight:"400"}}>(model)</span></h1>
          <h1 style={{color:"red",fontWeight:"500",fontSize:"20px"}}>{watch.brand} <span style={{fontSize:"15px",color:"grey",fontWeight:"400"}}>(brand)</span></h1>
          <p style={{margin:"40px 0"}}>{watch.description}</p>
          <h3>category: <span style={{color:"grey"}}>{watch.type}</span></h3>
          <h1 style={{marginTop:"30px"}}>${watch.price-watch.price*0.1} <span style={{fontSize:"18px"}}>(-10%off)</span> <span style={{fontSize:"15px"}}>MRP: <s style={{color:"red"}}>${watch.price}</s></span></h1>
          <div className='w_cont_buy'>
            <button>Buy Now</button>
          </div>
          <div style={{display:"flex",width:"100%"}}>
            <div className='small_pic' onClick={()=>setImg(watch.image1)}>
              <img src={watch.image1} width="100%"/>
            </div>

              <div className='small_pic' onClick={()=>setImg(watch.image2)}>
              <img src={watch.image2} width="100%"/>
            </div>

            <div className='small_pic' onClick={()=>setImg(watch.image3)}>
              <img src={watch.image3} width="100%"/>
            </div>

            <div className='small_pic' onClick={()=>setImg(watch.image4)}>
              <img src={watch.image4} width="100%"/>
            </div>
          </div>
          

        </div>
      </div>

      <hr style={{width:"90%",alignSelf:"center",margin:"10px 5% 30px 5%",boxShadow:"0 3px 10px blue"}}></hr>
      <h1 style={{textAlign:"center",margin:"40px"}}>Our Latest Products</h1>

      <div className='watch_cont'>
        {watches.filter((item)=>(
          watch.model===item.model?false:item
        )).map((item)=>(
           <div className='watch_card'>
           <div className='watch_img'>
               <img src={item.image} width="200px"/>
           </div>
           <hr style={{width:"80%",alignSelf:"center"}}></hr>
           <div className='watch_details'>
             <h4>Brand: <span style={{fontSize:"15px",fontWeight:"500"}}>{item.brand}</span></h4>
             <h4>Model: <span style={{fontSize:"15px",fontWeight:"500"}}>{item.model}</span></h4>
             <h4>Price: <span style={{fontSize:"15px",fontWeight:"500"}}>${item.price}</span></h4>
           </div>
           <div className='watch_btn'>
           <button onClick={()=>handleCart(item)}>Add to Cart</button>
           <button onClick={()=>handleBuy(item)}>Buy now</button>
           </div>
         </div>
        ))}
      </div>
      <Footer/></>}
    </div>
  )
}

export default Watch
