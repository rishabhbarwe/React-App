import React from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function Home() {
  const data = useLocation();
  console.log("Data :",data.state || {});
  return (
    <div className='HomeScreen'>
      <h1 style={{color:'white'}}>Welcome to Home Screen</h1>
      <nav className='navBox'>
          <ul className='listItems'>
            <li className='items'><Link to="/about">About</Link></li>
            <li className='items'><Link to="/profile">Profile</Link></li>
          </ul>
      </nav>

      <div className='fixed-bottom HomeEnd'>
         <p style={{color:'whitesmoke'}}>&copy;Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>
    </div>
  )
}
