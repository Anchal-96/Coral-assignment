import React from 'react'
import logo from '../images/mango.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
 <link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet"></link> 
const Navbar = () => {
  return (
    <>
      <div className='Navbar' onClick={NavbarToggle}>
        <div className='Navbar-menu'>
            <div className='navbar-section'>
                <div className='left-menu'>
                    <div className='logo'>
                        <img
                        src={logo}
                        alt="logo"
                        width={120}
                        height={100}
                        />
                    </div>
                </div>
                <div className='right-menu'>
                <ul className='unorderd-list'>
                    <li className='navbar-list'>Home</li>
                    <li className='navbar-list'>About</li>
                    <li className='navbar-list'>Services</li>
                    <li className='navbar-list'>Blog</li>
                    <li className='navbar-list'>Testimonials</li>
                    <li className='navbar-list'>Contact</li>
                </ul>
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
