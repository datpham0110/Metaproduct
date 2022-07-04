import React from 'react'
import logo from '../asset/logo.webp'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" />
        <h2>META PRODUCT</h2>
    </div>
  )
}

export default Header