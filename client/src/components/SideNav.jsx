import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoGold.png";
import { useNavigate } from "react-router-dom";



const SideNav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const navigate = useNavigate()

  // logout and navigate back to home page
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/")
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);







  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        display: "inline-block",
        borderRadius: "1% 1%",
        boxShadow: "-15px -10px 6px rgba(0, 0, 0, 0.2)",
        height: "100vh",
      }}
    >
      <img src={Logo} style={{ height: "13vh", minHeight:'8vh', marginBottom: "50px" }} alt="" />
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
        >
          {user.isRealtor ===true?
        <Link
          to="/dashboard"
          className="btn btn-outline-dark"
          style={{
            height: "40px",
            width: "170px",
            margin: "10px",
            boxShadow: "-10px -7px 16px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
        >
          Dashboard
        </Link>: null

}
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {user.isRealtor ===true?
        <Link
          to="/add_property"
          className="btn btn-outline-dark"
          style={{
            height: "40px",
            width: "170px",
            margin: "10px",
            boxShadow: "-10px -7px 16px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
        >
          Add Property
        </Link> : null

}
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Link
          to="/properties"
          className="btn btn-outline-dark"
          style={{
            height: "40px",
            width: "170px",
            margin: "10px",
            boxShadow: "-10px -7px 16px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
        >
          All Properties
        </Link>
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        
        <Link
          to="/my_profile"
          className="btn btn-outline-dark"
          style={{
            height: "40px",
            width: "170px",
            margin: "10px",
            boxShadow: "-10px -7px 16px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
        >
          My Profile
        </Link>
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          marginTop:"20px",
        }}
      >
        <Link
          to="/messages"
          className="btn btn-outline-dark"
          style={{
            height: "40px",
            width: "170px",
            margin: "10px",
            boxShadow: "-10px -7px 16px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
        >
          Messages
        </Link>
      </div>
      <div style={{textAlign:'Center', marginTop:'50px'}}>
        <h3>Welcome!</h3>
        <p>{firstName} {lastName}</p>
        
        
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <button
          to="/"
          className="btn btn-danger"
          style={{
            height: "40px",
            marginTop: "40px",
            boxShadow: "-10px -7px 16px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
