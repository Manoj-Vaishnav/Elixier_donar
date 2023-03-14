import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Nav() {
  return (
        <nav>
            <Link to="/donate">donate</Link>
            <Link to="/look4blood">look for blood</Link>
            <Link to="/about">about</Link>
        </nav>
  )
}

export default Nav