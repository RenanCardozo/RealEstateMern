import React from 'react'
import img from '../assets/house2.png'
import img1 from '../assets/house3.jpeg'
import img2 from '../assets/house1.jpeg'
import {Link} from 'react-router-dom'


const PropertyList = (props) => {
  const { propertyList } = props


  const nf = new Intl.NumberFormat()

  return (

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
            width: "17rem",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "25% 1%",
          }}
        >
        <img
          src={img1}
          style={{ height: "200px", borderRadius: "25% 1%" }}
          className="card-img-top"
          alt="..."
        />
          <div className="card-body">
            <h5 className="card-title">Property Address:</h5>
            <p className="card-text"> 625 N Alaska Ln, Brissle, NY 88393</p>
            <p className="card-text">Price: $785,679</p>
            <Link to="/users/login" className="btn btn-primary shadow">
              View Property
            </Link>
          </div>

          </div>

<div
          className="card"
          style={{
            width: "17rem",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "25% 1%",
          }}
        >
        <img
          src={img2}
          style={{ height: "200px", borderRadius: "25% 1%" }}
          className="card-img-top"
          alt="..."
        />
          <div className="card-body">
            <h5 className="card-title">Property Address:</h5>
            <p className="card-text"> 146 S Satter St, Tecton, AL 88263</p>
            <p className="card-text">Price: $785,679</p>
            <Link to="/users/login" className="btn btn-primary shadow">
              View Property
            </Link>
          </div>

          </div>



      {propertyList.map((property, idx) => {
        return (
          <div
          className="card"
          style={{
            width: "17rem",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "25% 1%",
          }}
          key={idx}
        >
          <img
            src={img}
            style={{ height: "200px", borderRadius: "25% 1%" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Property Address:</h5>
            <p className="card-text"> {property.location.address} {property.location.city}, {property.location.state} {property.location.zipCode}</p>
            <p className="card-text">Price: ${nf.format(`${property.price}`)}</p>
            <Link to="/users/login" className="btn btn-primary shadow">
              View Property
            </Link>
          </div>
        </div>
        )
      })}
    </div>

  )
}

export default PropertyList