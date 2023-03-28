import React, { useEffect, useState } from "react";
import Chart1 from "../components/Chart1";
import Chart3 from "../components/Chart3";
import Chart2 from "../components/Chart2";
import SideNav from "../components/SideNav";
import Logo from '../assets/logoGold.png'
// import secondImg from '../assets/house4.jpg'

//show first name of the person logged in
const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />

      <div style={{
         flex: "1",
         marginRight: "30px",
         padding: "10px",
         borderRadius: "0% 0% 10% 10%",
         boxShadow: "25px 10px 16px rgba(0, 0, 0, 0.2)",
         backgroundImage:`url(${Logo})`,
         backgroundRepeat:'no-repeat',
         backgroundPosition:'center',
         backgroundSize:'40vh'
        }}
      >
        <h1 className="mb-3" style={{ textAlign: "center", marginTop: "50px" }}>
          <span style={{ color: "gold" }}>R E A L</span> Talk?
        </h1>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ textAlign: "center", padding: "10px" }}
        >
          We Inspire To Be Great, Not Just Average!
        </h6>

        
        <div
          style={{ padding: "20px", display: "flex",  justifyContent: "center" }}
        >
          <div style={{padding:'20px', marginRight:'100px', marginLeft:'100px'}}>
            <h3 style={{marginLeft:'40px', marginBottom:'50px'}}>Types of Properties</h3>
              <Chart2 />

            <div style={{ marginBottom: "50px", marginTop:'50px' }}>
              <h1>Welcome Back</h1>
              <h1>
                <span style={{ color: "gold" }}>Realtor</span>!
              </h1>
            </div>

            <h3>Goals in the next month:</h3>
            <ul>
              <li>Make 50 calls a day</li>
              <li>Walk Company Dog</li>
              <li>Min 3 Sales A monthly</li>
              <li>Talk To Me Nicely</li>
              <li>Fight 3 people Outside Mcdonald's</li>
              <li>Donate To Real Talk Investments</li>
            </ul>
          </div>

          <div
            style={{ padding: "20px", display: "flex", textAlign: "center" }}
          >
            <div >
              <h3 style={{}}>Property Sales</h3>
              <Chart1 />
              <h3 style={{marginTop:'50px'}}>Properties On Sale</h3>
              <Chart3 />
            </div>
          </div>
        </div>
        <div
        style={{
          marginTop: "50px",
          fontSize: "10px",
          textAlign: "center",
          fontWeight: 200,
        }}
      >
        <p>
          This is a property of Gold Standard Estate a Real Estate Service, Real Talk is not Responsible
          if you make a bad purchase or loose all your money due to your bad
          choices! Any lawsuits will be settled outside of court with our fists,
          any action will result in your permanent lose. Think twice before
          acting. This project was brought to you by Renan, Boe, yours truly Javi. Aka.. Boenan Rodriguez{" "}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
