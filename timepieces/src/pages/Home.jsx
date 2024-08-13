import React, { useState } from 'react'
import Products from '../components/Products'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
    const [isLogin,setIsLogin]=useState(false)

  return (
    <>
      <Header setIsLogin={setIsLogin}/>
      <Hero/>
      <Products isLogin={isLogin} setIsLogin={setIsLogin} />
      <Footer/>
    </>
  )
}

export default Home
