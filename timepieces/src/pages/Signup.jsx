import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/login.css'

const Signup = () => {
  return (
    <div className='login_main'>
      <div className='login_cont'>
        <h1>SIGNUP</h1>
        <form className='login_form'>
          <label>username: </label>
          <input type='text' placeholder='username'/>
          <label>Email:</label>
          <input type='email' placeholder='mail Id'/>
          <label>Password: </label>
          <input type='password' placeholder='password'/>
          <button>Signup</button>
        </form>
        <p>Already have an account?<span><Link to="/login">Login</Link></span></p>
      </div>
    </div>
  )
}

export default Signup
