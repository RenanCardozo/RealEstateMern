import React, { useState, useEffect } from "react";
import { Link, UseNavigate } from "react-router-dom";
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.jpeg";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import { get } from "mongoose";
import PropertyList from "../components/PropertyList"; 
import axios from 'axios'

const LandingPage = () => {
  const [propertyList, setPropertyList] = useState([]);


  useEffect(()=>{
    axios.get("http://localhost:8000/api/properties")
    .then(res=>{
        setPropertyList(res.data)
        console.log(res.data)
        // setLoaded(!loaded)
      })
  },[]);

  return (
    <div style={{ marginLeft: "100px", marginRight: "100px" }}>
      <TopNav />
      <Hero />
      <Filter />
      {propertyList?
      <PropertyList propertyList={propertyList} />:
      <h1>Loading...</h1>
}



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
          acting.{" "}
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
