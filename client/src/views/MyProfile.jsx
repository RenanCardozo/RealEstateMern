import React from 'react'
import SideNav from "../components/SideNav";
import Logo from '../assets/logoGold.png'

const MyProfile = () => {
  return (
    <div style={{ display: "flex", marginRight: "50px", height: "100vh" }}>
    <SideNav style={{ position: "fixed" }} />
    <div
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        borderRadius: "0% 0% 10% 10%",
        boxShadow: "15px 10px 16px rgba(0, 0, 0, 0.2)",
        flex: "1",
        backgroundImage:`url(${Logo})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'bottom',
        backgroundSize:'50vh'
      }}
    >
      <h1 className="mb-3" style={{ textAlign: "center", marginTop: "50px" }}>
        <span style={{ color: "gold" }}>R E A L</span> Talk?
      </h1>
      <h6
        className="card-subtitle mb-2 text-muted"
        style={{ textAlign: "center" }}
        >
        Let Us know How We Did!
      </h6>
      <div style={{padding:'150px', textAlign:'center'}}>
        <h3>We</h3>
        <h2>Are</h2>
        <h1><span style={{ color: "gold" }}>R E A L</span> Talk?</h1>
        <div style={{padding:'70px', marginLeft:'230px'}}>

          {/* <div className='glowing-btn'><span style={{ color: "gold" }} className='glowing-txt'>R<span className='faulty-letter'>E</span><span className='faulty-letter'>A</span><span className='faulty-letter'>L</span></span></div> */}
          <div className='glowing-btn'><span className='glowing-txt'>R<span className='faulty-letter'>E</span><span className='faulty-letter'>N</span><span className='faulty-letter'>A</span><span className='faulty-letter'>N</span></span></div>
          <div className='glowing-btn'><span style={{ color: "gold" }} className='glowing-txt'>B<span className='faulty-letter'>O</span><span className='faulty-letter'>E</span></span></div>
          <div className='glowing-btn'><span className='glowing-txt'>J<span className='faulty-letter'>A</span><span className='faulty-letter'>V</span><span className='faulty-letter'>I</span></span></div>

        </div>
      </div>
      
      </div>
    </div>
  )
}

export default MyProfile