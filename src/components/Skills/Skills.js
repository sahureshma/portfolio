import React from 'react'
import './Skills.css';
import HTML from '../../assest/html.png';
import CSS from '../../assest/css.png';
import JS from '../../assest/js_large.png';
import REACT from '../../assest/react.png';
import REDUX from '../../assest/Redux-removebg-preview.png';
import MUI from '../../assest/muilogo.png';
import GITHUB from '../../assest/github_large.png';



export default function Skills() {
  return (
    
    <section id='skills'>
      
      <div className='ski'>
      <h1>Skills</h1>
      </div>
      <div className="container skill__container">
        <div className="skill__frontend">
          <button><img src={HTML} alt='IMG' className='buttons__img' width='100px' height='100px'/><h2>HTML</h2> </button>
          <button><img src={CSS} alt='IMG' className='buttons__img' width='100' height='120'/><h2>CSS</h2> </button>
          <button><img src={JS} alt='IMG' className='buttons__img'/><h2>JS</h2> </button>
          <button><img src={REACT} alt='IMG' className='buttons__img'/><h2>REACT</h2> </button>
          <button><img src={REDUX} alt='IMG' className='buttons__img'/><h2>REDUX</h2> </button>
          <button><img src={MUI} alt='IMG' className='buttons__img'/><h2>Material UI</h2> </button>
          <button><img src={GITHUB} alt='IMG' className='buttons__img'/><h2>GITHUB</h2> </button>
          
          
        </div>
      </div>
    </section>
  )
}