import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/login.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = (props) => {
  const [login,setLogin]=useState(true)
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      await axios.post('https://dialuxe.onrender.com/user/login',{email,password})
      .then(res=>{
        console.log(res.data)
        toast.success("logged in successfull !")
        props.setIsLogin(false)
        localStorage.setItem("token",res.data)
      })
    } catch (error) {
      console.log(error)
      toast.error(error.response.data)
    }
  }

  const handleSignup=async(e)=>{
    e.preventDefault()
    try {
      await axios.post('https://dialuxe.onrender.com/user/signup',{username,email,password})
      .then(res=>{
        setLogin(true)
      })
    } catch (error) {
      console.log(error.response.data);
      
    }
  }
  return (
    <div className='login_main'>
      {login?
      <div className='login_cont'>
      <h1>LOGIN</h1>
      <h2 style={{position:"absolute",top:"5px",right:"9px",cursor:"pointer"}} onClick={()=>props.setIsLogin(false)}>X</h2>
      <form className='login_form' onSubmit={handleLogin}>
        <label>email: </label>
        <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password: </label>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button >Login</button>
      </form>
      <p>Dont have an account?<span><Link onClick={()=>setLogin(false)} style={{color:"red"}}>Signup</Link></span></p>
    </div>
      :
      
      <div className='login_cont'>
        <h1>SIGNUP</h1>
        <h2 style={{position:"absolute",top:"5px",right:"9px",cursor:"pointer"}} onClick={()=>props.setIsLogin(false)}>X</h2>
        <form className='login_form' onSubmit={handleSignup}>
          <label>username: </label>
          <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
          <label>Email:</label>
          <input type='email' placeholder='mail Id' onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password: </label>
          <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
          <button>Signup</button>
        </form>
        <p>Already have an account?<span><Link onClick={()=>setLogin(true)} style={{color:"red"}}> Login</Link></span></p>
      </div>}
      
    </div>
  )
}

export default Login
