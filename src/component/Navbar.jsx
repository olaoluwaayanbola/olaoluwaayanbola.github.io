import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <h2>navbar</h2>
        <Link to="/">
            <span>home</span>
        </Link>
        <Link to="/main">
            <span>main</span>
        </Link>
        <Link to="/footer">
            <span>footer</span>
        </Link>
    </div>
  )
}

export default Navbar