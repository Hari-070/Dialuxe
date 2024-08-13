import React from 'react'
import '../stylesheets/landing.css'
import hero from '../assets/hero1.png'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Landing = () => {
  const navigate=useNavigate()
  return (
    <div style={{backgroundColor:"black"}}>
      <div className='head'>
        {/* <h2>Home</h2> */}
        <img src='../src/assets/logo.png' width="200px"/>
        {/* <h2>Login</h2> */}
      </div>

      <div className='land_hero'>
        {/* <img src='../src/assets/landing3.png' width="80%" /> */}
        <h1>The Ultimate Destination</h1>
        <h2>For Your Next Premium TimePiece</h2>
        <button onClick={()=>navigate("/")} className='landButton'>Shop Now </button>
      </div>

      {/* <Hero/> */}

      <div className='choose'>
        <div className='chooseLeft'>
          <h1>Why Choose Us?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nisi neque fuga. Culpa quidem debitis commodi expedita deleniti obcaecati, alias dolor recusandae veritatis, consequuntur fugit quibusdam quod laborum repellat adipisci!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio rerum quas dolorum impedit consequuntur veritatis, culpa architecto, cupiditate consectetur deserunt. Veniam impedit hic corporis animi, rem eaque temporibus eos.</p>
        </div>
        <img src='../src/assets/landing1.png' width="700px" height="100%"/>
      </div>

      <div className='maker'>
        <h1 style={{textAlign:"center"}}>The Dedicated Work Of the Makers<br/>right In Your Hands</h1>
        <hr></hr>
        <img src='../src/assets/watch/img5.png' width="800px"/>
        <h2>We Provide The best Brands</h2>
        <p style={{textAlign:"center",marginLeft:"30%",marginRight:"30%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nisi neque fuga. Culpa quidem debitis commodi expedita deleniti obcaecati, alias dolor recusandae veritatis, consequuntur fugit quibusdam quod laborum repellat adipisci!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio rerum quas dolorum impedit consequuntur veritatis, culpa architecto, cupiditate consectetur deserunt. Veniam impedit hic corporis animi, rem eaque temporibus eos.</p>
        <button onClick={()=>navigate("/")} className='landButton'>Check Now </button>
      </div>
      <div className='testi'>
        <div className='testiLeft'>
          <img src='../src/assets/watch/img3.png' width="500px"/>
          <h2>Quality Providers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt quaerat? Accusamus delectus ullam, ipsa est at, quos ipsam voluptatibus aspernatur, assumenda laboriosam perferendis consectetur quibusdam cupiditate nisi rerum repellendus!</p>
        </div>
        <div className='testiLeft'>
          <img src='../src/assets/watch/img4.png' width="400px"/>
          <h2>High Level Testing</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem assumenda, aperiam, libero cumque modi iure vel hic distinctio explicabo, voluptatem doloremque aspernatur eos sunt mollitia. Vero vel aut dolorum incidunt?</p>
        </div>
      </div>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <button className='landButton' onClick={()=>navigate("/")}>Shop Now</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Landing
