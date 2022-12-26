import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <>
    <div className='navbar-container'>
        <div className='navbar-container-content'>
            <div className='navbar-container-content-left'>
              <img src={Logo} alt="logo" />
            </div>
           <div className="navbar-container-content-second">
             <div className='navbar-container-content-second-middle'>
              <button>Platform</button>
              <button>Peripherals</button>
              <button>About</button>
             </div>
            <div className='navbar-container-content-second-right'>
              <button className="login">LogIn</button>
              <button className='signin'>SignUp</button>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Navbar