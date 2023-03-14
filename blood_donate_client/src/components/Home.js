import React from 'react'
import { Link } from 'react-router-dom'

function hello() {
  return (
    <div className='homepage'>
        <h1 >Elixir <span style={{color:'white'}}>Donor</span></h1>
        <h2>Blood is meant to circulate. Pass it around.</h2>
        <Link to="/donate">
        <button className='homeBtn'>Register Now</button>
        </Link>
        
    </div>
  )
}

export default hello