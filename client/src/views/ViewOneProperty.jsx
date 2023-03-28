import React from "react";
import { Link } from "react-router-dom";
import house from "../assets/house1.jpeg";
import SideNav from "../components/SideNav";

const ViewOneProperty = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div
        style={{
          flex: "1",
          marginLeft: "100px",
          marginRight: "50px",
          paddingRight: "100px",
          borderRadius: "7% 1%",
          boxShadow: "25px 10px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 className="mb-3" style={{ textAlign: "center", marginTop: "30px" }}>
          <span style={{ color: "gold" }}>R E A L</span> Talk?
          <h6
            className="card-subtitle mb-2 text-muted"
            style={{ textAlign: "center", padding: "20px" }}
          >
            This Property Is Managed By: Realtor
          </h6>
        </h1>

        <header style={{ paddingLeft: 0 }}>
          <main
            className="p-5 text-center bg-image"
            style={{
              backgroundImage: `url(${house})`,
              backgroundSize: "100vh",
              borderRadius: "10% 1%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "90px",
                width: "50vh",
                borderRadius: "25% 1%",
              }}
            >
              <div className="align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">
                    <span style={{ color: "gold" }}>Interested</span>?
                  </h1>
                  <Link
                    to="/login"
                    className="btn btn-outline-light btn-lg"
                    href="#!"
                    role="button"
                  >
                    Place Offer Now!
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </header>

        <div style={{ padding: "5px", textAlign: "center" }}>
          <h2 style={{ padding: "10px" }}>
            Title: Highrise Condo W/ Seaside Views
          </h2>
          <h5>Property Type: Condo</h5>
          <h3 style={{ padding: "3px" }}>Address:</h3>
          <p> 1324 N Muddhound Ln</p>
          <p>New State, IN, 79866</p>
          <h3 style={{ padding: "3px" }}>Price: $290,775</h3>
          <h3 style={{ padding: "10px" }}>Discription:</h3>
          <p>
            {" "}
            This property is a made up property that i will be talking about at
            the moment to make some dummy data!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewOneProperty;
