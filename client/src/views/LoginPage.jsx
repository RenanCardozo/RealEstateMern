import React, { useState } from "react";
import house3 from "../assets/house3.jpeg";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import axios from "axios";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ email, password, firstName, lastName }) {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [form, setForm] = useState({
    email,
    password,
    firstName,
    lastName,
  });
  const navigate = useNavigate();

  //handleLogin store in session and local storage
  const handleLogin = (e) => {
    console.log("here i am");
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', {...form})
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/properties');
        navigate('/properties');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // register
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //register
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/register", { ...form })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/properties");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form);
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(29, 47, 111)",
        height: "100vh",
      }}
    >
      <TopNav />
      <MDBContainer className=" container-fluid ">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBTabs
                pills
                justify
                className="d-flex justify-content-center m-4"
              >
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab1")}
                    active={justifyActive === "tab1"}
                    style={{ border: "1px solid blue" }}
                  >
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab2")}
                    active={justifyActive === "tab2"}
                    style={{ border: "1px solid blue" }}
                  >
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                  <MDBCardBody
                    className="p-5 shadow-5 text-center"
                    onSubmit={handleLogin}
                  >
                    <h2 className="fw-bold mb-5">Sign In</h2>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      type="email"
                      name="email"
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleLogin}
                    >
                      Sign in
                    </MDBBtn>
                  </MDBCardBody>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === "tab2"}>
                  <MDBCardBody
                    className="p-5 shadow-5 text-center"
                    onSubmit={handleSubmit}
                  >
                    <h2 className="fw-bold mb-5">Sign up now</h2>

                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          name="firstName"
                          id="form1"
                          type="text"
                          onChange={handleChange}
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last name"
                          name="lastName"
                          id="form2"
                          type="text"
                          onChange={handleChange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </MDBBtn>
                  </MDBCardBody>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6" style={{}}>
            <img
              src="https://nwpmchomes.com/wp-content/uploads/2021/07/139_NWM1394091_1_1597482370.jpg"
              className="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
