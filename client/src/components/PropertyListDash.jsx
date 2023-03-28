import React from 'react'
import img from '../assets/house2.png'
import {Link} from 'react-router-dom'


const PropertyListDash = (props) => {
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
      {propertyList.map((property, idx) => {
        return (
          <div
            className="card"
            style={{
              width: "18rem",
              backgroundColor: "rgba(0, 0, 0, 0.06)",
              borderRadius: "20% 1%",
            }}
            key={idx}
          >
            <img
              src={img}
              style={{ height: "200px", borderRadius: "20% 1%" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Property Address:</h5>
              <p className="card-text">
                {" "}
                {property.location.address} {property.location.city},{" "}
                {property.location.state} {property.location.zipCode}
              </p>
              <p className="card-text">Price: ${nf.format(`${property.price}`)}</p>
              <h5>Listing Agent: {property.creator.firstName}</h5>
              <Link to={`/view/${property._id}`} className="btn btn-primary shadow">
                View Property
              </Link>
            </div>
          </div>
        );
      })}
    </div>

  )
}

export default PropertyListDash

