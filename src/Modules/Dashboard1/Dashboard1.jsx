import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import './Dashboard1.scss';
import Banner from '../../assets/slidermain.svg';
import productImg from '../../assets/product1.png';
import productImg2 from '../../assets/product2.png';
import productImg3 from '../../assets/product3.png';
import productImg4 from '../../assets/product4.png';
import pitems from '../../assets/product5.png';
import pitems6 from '../../assets/product6.png';
import pitems7 from '../../assets/product7.png';
import Footer from '../../Common/Footer/Footer';

const Dashboard1 = () => {
  return (
    <>
    
    <div className='d-one-container'>
        <div className='d-one-container-content'>
        <Navbar />

      <div className="d-one-container-content-slider">
        <div className="d-one-container-content-slider-content">
          <div className="d-one-container-content-slider-content-left">
           <h1>Most Sold <span>Motion Simulator</span> in The World</h1>
          <p>We sold more Motion Simulator platforms than all other vendors combined.</p>
         <button className='f-btnslider'>BuyNow</button>
         <button className='s-btnslider'>Learn More</button>
         
          </div>
          <div className="d-one-container-content-slider-content-right">
            <img src={Banner} alt='banner' />
          </div>
        </div>
      </div>

        </div>
    </div>
    <div className='product-container'>
      <div className='product-container-content'>
        <div className='product-container-content-first'>
          <Products LoremText="Lorem ipsum dolor amet"
          Productnum="Product 1"
          btntext1="BuyNow"
          btntext2="Learn More"
          Pro1={productImg}
/>
        </div>
        <div className='product-container-content-second'>
        <Products LoremText="Lorem ipsum dolor amet"
          Productnum="Product 2"
          btntext1="BuyNow"
          btntext2="Learn More"
          Pro1={productImg2}
/>
        </div>
      </div>
      <div className='product-container-content2'>
      <Products2 LoremText="Lorem ipsum dolor amet"
          Productnum="Product 3"
          btntext1="BuyNow"
          btntext2="Learn More"
          Pro1={productImg3}
/>

<Products2 LoremText="Lorem ipsum dolor amet"
          Productnum="Product 4"
          btntext1="BuyNow"
          btntext2="Learn More"
          Pro1={productImg4}
/>
      </div>
    </div>


   <div className='cardproduct-container'>
    <div className="cardproduct-container-content">
      <p>Lorem ipsum dolor sit amet</p>
      <div className="cardproduct-container-content-row1">
     
      <CardItems tittle="Games"
      data="Lorem ipsum dolor sit amit"
      pro5={pitems}
      bg="#5D7D97"
      />

<CardItems tittle="Customize"
      data="Lorem ipsum dolor sit amit"
      pro5={pitems6}
      bg="#3E66BA"
      
      />

<CardItems tittle="Hiring/Rental"
      data="Lorem ipsum dolor sit amit"
      pro5={pitems7}
      bg="#85958E"
      />
     
      </div>
       </div>
   </div>


   <Footer />
    </>
  )
}

export default Dashboard1;



const Products=({LoremText, Productnum,btntext1,btntext2,Pro1})=>{
  return(
    <div className='product-item'>
      <div className='product-item-content'>
        <p> {LoremText} </p>
        <h1> {Productnum} </h1>
        <button className='first-btn'> {btntext1} </button>
        <button className='second-btn'> {btntext2} </button>
        <img src={Pro1} alt='product-item' />
      </div>
    </div>
  )
}


//product3,4
const Products2=({LoremText, Productnum,btntext1,btntext2,Pro1})=>{
  return(
    <div className='product-item2'>
      <div className='product-item2-content'>
        <p> {LoremText} </p>
        <h1> {Productnum} </h1>
        <button className='first-btn'> {btntext1} </button>
        <button className='second-btn'> {btntext2} </button>
        <img src={Pro1} alt='product-item' />
      </div>
    </div>
  )
}

//cards-Products

const CardItems=({tittle,data,pro5,bg,})=>{
  return(
    <div className="carditems-container" style={{backgroundColor:`${bg}`}}>
      <div className="carditems-container-content">
        <h1> {tittle} </h1>
        <p> {data} </p>
        <center><button className='second-btn2'>Learn More</button></center>
        <img src={pro5} alt="item" />
      </div>
    </div>
  )
}