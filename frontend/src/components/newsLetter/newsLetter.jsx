import React from 'react'
import './newsLetter.css'

const newsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers To Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="Type your email..." />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default newsLetter