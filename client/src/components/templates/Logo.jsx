import './Logo.css'
import React from "react";
import logo from '../../assets/logo.png';

export default props =>
<aside className='logo'>
  <a href="/" className='logo'>
    <img src={logo} alt="Logo" />
    </a>
</aside>