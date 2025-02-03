import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Screen</h1>
      <nav className='navBox'>
        <ul className='listItems'>
            <li className='items'><Link to="/about">About</Link></li>
            <li className='items'><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  )
}
