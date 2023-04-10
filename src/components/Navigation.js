import React from "react";
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

