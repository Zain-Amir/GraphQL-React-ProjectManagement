import React from 'react'
import logo from './assets/logo.png'
const Header = () => {
  return (
        <nav className='navbar bg-light mb-4 p-1'>
            <div className='container'>
                <a className='navbar-brand'  href = "/" >
                    <div className='d-flex'>
                    <img src = {logo} className='mr-2'/>
                    <div> ManageQL</div>
                    </div>       
                                 
                </a>   
            </div> 
        </nav>
  )
}

export default Header