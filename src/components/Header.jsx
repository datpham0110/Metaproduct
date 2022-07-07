import React from 'react'
import logo from '../images/logoThienLongOne.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to="/">
    <div className="header">

      <img src={logo} alt="" />
        <h2>META PRODUCT</h2>
    </div>
    </Link>
  )
}

export default Header