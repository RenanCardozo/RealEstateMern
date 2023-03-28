import React, {useEffect, useState} from 'react'
import SideNav from '../components/SideNav'
import PropertyListDash from '../components/PropertyListDash'
import axios from 'axios'
import Filter from '../components/Filter'
import img from '../assets/house4.jpg'
import img1 from '../assets/house1.jpeg'
import img2 from '../assets/house5.jpeg'
import Logo from '../assets/logoGold.png'
import { Link } from 'react-router-dom'




const AllProperties = () => {
  const [filter, setFilter] = useState({
    priceRange: "",
    city: "",
    propertyType: "",
  });
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    const queryParams = {};
    if (filter.priceRange) {
      queryParams.priceRange = filter.priceRange;
    }
    if (filter.city) {
      queryParams.city = filter.city;
    }
    if (filter.propertyType) {
      queryParams.propertyType = filter.propertyType;
    }
    axios
      .get("http://localhost:8000/api/properties", { params: queryParams })
      .then((res) => {
        setPropertyList(res.data);
        console.log(res.data);
      });
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div style={{ flex: "1",
              paddingLeft: "100px",
              paddingRight: "100px",
              borderRadius: "0% 0% 10% 10%",
              boxShadow: "15px 10px 16px rgba(0, 0, 0, 0.2)",
              marginRight:'50px'}}>
        <h1
          className="mb-3"
          style={{ textAlign: "center", padding:'72px',
          backgroundImage:`url(${Logo})`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center',
          backgroundSize:'50vh' }}
        >
          <span style={{ color: "gold"}}>R E A L</span>{" "}
          Talk?
        </h1>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ textAlign: "center", paddingBottom: "20px" }}
        >
            Look Through All Of Our Properties Listed 
        </h6>

          
        <Filter onChange={handleFilterChange} />



        <div     className="container-fluid  "
            style={{
              display: "flex",
              flexWrap: 'wrap',
              justifyContent: "space-evenly",
              marginTop: "30px",
            }}>



          <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "20% 1%",
          }}
        >
        <img
          src={img}
          style={{ height: "200px", borderRadius: "20% 1%" }}
          className="card-img-top"
          alt="..."
        />
          <div className="card-body">
            <h5 className="card-title">Property Address:</h5>
            <p className="card-text"> 146 S Satter St, Tecton, AL, 88263</p>
            <p className="card-text">Price: $785,679</p>
            <h5>Listing Agent:</h5>
            <Link to="/view/jg" className="btn btn-primary shadow">
              View Property
            </Link>
          </div>

          </div>


          <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "20% 1%",
          }}
        
        >
        <img
          src={img1}
          style={{ height: "200px", borderRadius: "20% 1%" }}
          className="card-img-top"
          alt="..."
        />
          <div className="card-body">
            <h5 className="card-title">Property Address:</h5>
            <p className="card-text"> 146 S Satter St, Tecton, AL, 88263</p>
            <p className="card-text">Price: $785,679</p>
            <h5>Listing Agent:</h5>
            <Link  to="/view/jg" className="btn btn-primary shadow">
              View Property
            </Link>
          </div>

          </div>


          <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "20% 1%",
          }}
        
        >
        <img
          src={img2}
          style={{ height: "200px", borderRadius: "20% 1%" }}
          className="card-img-top"
          alt="..."
        />
          <div className="card-body">
            <h5 className="card-title">Property Address:</h5>
            <p className="card-text"> 146 S Satter St, Tecton, AL, 88263</p>
            <p className="card-text">Price: $785,679</p>
            <h5>Listing Agent:</h5>
            <Link to="/view/jg" className="btn btn-primary shadow">
              View Property
            </Link>
          </div>

          </div>
{propertyList ? (
  <PropertyListDash propertyList={propertyList} />
) : (
  <h1>Loading...</h1>
)}
        </div>
      </div>
    </div>
  );
}

export default AllProperties