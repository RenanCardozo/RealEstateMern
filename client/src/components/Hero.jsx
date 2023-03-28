import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import house from '../assets/house5.jpeg'

const Hero = () => {


  
  return (
    <div>

    <header style={{ paddingLeft: 0 }}>
      <main
        className='p-5 text-center bg-image'
        style={{ backgroundImage:`url(${house})`,backgroundSize:'cover' ,borderRadius: '10% 1%', backgroundPosition:'center'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding:'90px', width:'50vh', borderRadius: '25% 1%'}}>
          <div className='align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'><span style={{color:'gold'}}>R E A L</span> Talk?</h1>
              <h4 className='mb-3'>We Sell Properties & Happiness!</h4>
              <Link to='/login' className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </header>


    </div>
  )
}

export default Hero