import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './hero.css';
import { saveAs } from 'file-saver';

const Comingsoon = 'https://i.ibb.co/MNw2fvG/comingsoon.png'

const downloadimage=() => {
    saveAs(Comingsoon, 'coming-soon.png');
};

const Hero = () => {
  return (
    <div className=' text-white '>
              <div className='max-w-[800px] pt-10 w-full h-screen mx-auto text-center flex flex-col justify-centre' >
        <p className='neon-text md:text-7xl sm:text-6xl text-center text-4xl font-bold p-2 '>
          Garden Of Heathens
        </p>
       <section>
       <div className='container pt-20'>
    <div className='box'>
        <span></span>
        <div className='content'>
            <img src={Comingsoon} alt="" className="h-150 mx-auto" onClick={downloadimage} />
        </div> 
    </div>
    <div className='box'>
        <span></span>
        <div className='content'>
            <img src={Comingsoon} alt="" className="h-150 mx-auto" onClick={downloadimage} />
        </div> 
    </div>
    <div className='box'>
        <span></span>
        <div className='content'>
            <img src={Comingsoon} alt="" className="h-150 mx-auto" onClick={downloadimage} />
        </div> 
        </div>
    
    </div>
       </section>
    </div>
   
    </div>
  );
};

export default Hero;