import React from 'react';
import './Header.css'
import CTA from './Cta';

export default function Header() {
  return (
   <header>
    <div className="container header__container">
     <h5>Hello I am</h5>
     <h1>Reshma Sahu</h1>
     <h5 className='text-light'>Front-End Developer</h5>
     <CTA/>
     
     <div className="me">
      
     </div>
     <a href='#contact' className='scroll__down'></a>
    </div>
   
   </header>
  )
}