import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/login.css'

const Login = (props) => {
  const [login,setLogin]=useState(true)
  return (
    <div className='login_main'>
      {login?
      <div className='login_cont'>
      <h1>LOGIN</h1>
      <h2 style={{position:"absolute",top:"5px",right:"9px",cursor:"pointer"}} onClick={()=>props.setIsLogin(false)}>X</h2>
      <form className='login_form'>
        <label>username: </label>
        <input type='text' placeholder='username'/>
        <label>Password: </label>
        <input type='password' placeholder='password'/>
        <button>Login</button>
      </form>
      <p>Dont have an account?<span><Link onClick={()=>setLogin(false)} style={{color:"red"}}>Signup</Link></span></p>
    </div>
      :
      
      <div className='login_cont'>
        <h1>SIGNUP</h1>
        <h2 style={{position:"absolute",top:"5px",right:"9px",cursor:"pointer"}} onClick={()=>props.setIsLogin(false)}>X</h2>
        <form className='login_form'>
          <label>username: </label>
          <input type='text' placeholder='username'/>
          <label>Email:</label>
          <input type='email' placeholder='mail Id'/>
          <label>Password: </label>
          <input type='password' placeholder='password'/>
          <button>Signup</button>
        </form>
        <p>Already have an account?<span><Link onClick={()=>setLogin(true)} style={{color:"red"}}> Login</Link></span></p>
      </div>}
      
    </div>
  )
}

export default Login
