import React from 'react';
import './Footer.scss';
import Img1 from '../../assets/faq.png';
import Img2 from '../../assets/phone.png';
import Img3 from '../../assets/help.png';
import ftlogo from '../../assets/ftlogo.png';

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className="footer-container-content">
            <div className='footer-container-content-row1'>

            <FCards
            FAQ={Img1}
            Heading="FAQ"
            />

            <hr className="line-one"/>

            <FCards
            FAQ={Img2}
            Heading="FAQ"
            />

            <hr className="line-one" />

            <FCards
            FAQ={Img3}
            Heading="FAQ"
            />

            </div>
            <div className='footer-container-content-row2'>
              <img src={ftlogo} alt="footerLogo" />
            </div>
        </div>
    

    <div className="footer-container-bottom">
        <div className='footer-container-bottom-content'>
          <p>Copyright © 2022. All Rights Reserved.</p>
          <p>Terms and Condition   |   Privacy Policy</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer;


const FCards=({FAQ,Heading})=>{
  return(
    <div className='footercard-container'>
      <div className='footercard-container-content'>
        <div className='footercard-container-content-left'>
          <img src={FAQ} alt="faq" />
        </div>
        <div className='footercard-container-content-right'>
        <h1> {Heading} </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <button>Learn More</button>
        </div>
      </div>

      
    </div>
  )
}