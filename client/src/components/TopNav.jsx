import React from 'react'
import logoGold from '../assets/logoGold.png'
import {Link, Route, useNavigate} from 'react-router-dom'



const TopNav = () => {

  return (
    <div className="container-fluid">
      <div style={{display:'flex'}}>
        <Link to='/'><img src={logoGold} alt="Logo" style={{height : '220px'}} /></Link>
        <div  style={{display:'flex', flex:'5', justifyContent:'flex-end'}}>
          <div style={{padding:'100px'}}>
            {window.location.pathname === '/'?
          <Link to="/users/login" className='btn btn-primary shadow-lg'>Login / Register</Link> :
          <Link to="/" className='btn btn-primary shadow-lg'>Home</Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav