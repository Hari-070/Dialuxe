import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer_main'>
      <div className='footer_left'>
        <img src='../src/assets/logo.png' width="200px"/>
        <div>
            <input type='text' placeholder='email'/>
            <button>Subscribe</button>
        </div>
      </div>

      <div className='footer_right'>
        <div>
        <h3>Navigation</h3>
        <p>Home</p>
        <p>About us</p>
        <p>Products</p>
        <p>Cart</p>
        <div style={{marginTop:"20px"}}>
            <h2>Follow Us On</h2>
            <p style={{marginLeft:"10px",marginBottom:"5px"}}><FaInstagram/> Insta</p>
            <p style={{marginLeft:"10px",marginBottom:"5px"}}><FaLinkedin/> LinkedIn</p>
            <p style={{marginLeft:"10px",marginBottom:"5px"}}><FaGithub/> Github</p>
        </div>
        </div>
        
        <div >
            <h1>Contact Us:</h1>
            <p><MdOutlineEmail/> office.mail@dialuxe.com</p>
            <p><FaPhoneAlt/> +91 98764-75321</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
