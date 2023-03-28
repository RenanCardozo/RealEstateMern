import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import SideNav from "../components/SideNav";
import Logo from '../assets/logoGold.png'

const propertyTypes = [
  "SingleFamily",
  "SemiDetached",
  "Townhome",
  "Condo",
  "Multifamily",
  "Apartment",
  "Land",
];

const CreatePropertyPage = ({
  title = "",
  description = "",
  propertyType = "",
  price = 0,
  photo = "",
  address = "",
  state = "",
  zipCode = "",
  city = "",
}) => {
  const [form, setForm] = useState({
    title,
    description,
    propertyType,
    price,
    photo,
    address,
    city,
    state,
    zipCode,
  });
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(token);
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      title: form.title,
      description: form.description,
      propertyType: form.propertyType,
      price: form.price,
      photo: form.photo,
      location: {
        address: form.address,
        city: form.city,
        state: form.state,
        zipCode: form.zipCode,
      },
    };
    axios
      .post("http://localhost:8000/api/properties", { newProperty, token })
      .then((res) => {
        console.log(res);
        navigate("/properties");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // this one is setting state for the picture upload
  const handleFile = (e) => {
    setForm({
      ...form,
      photo: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: "flex", marginRight: "50px", height: "100vh" }}>
      <SideNav style={{ position: "fixed" }} />
      <div
        style={{
          padding: "0px 100px 100px 100px",
          borderRadius: "0% 0% 10% 10%",
          boxShadow: "15px 10px 16px rgba(0, 0, 0, 0.2)",
          flex: "1",
          backgroundImage:`url(${Logo})`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:'bottom',
          backgroundSize:'40vh'
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h1
            className="mb-3"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            <span style={{ color: "gold", textAlign: "center" }}>R E A L</span>{" "}
            Talk?
          </h1>
          <h6
            className="card-subtitle mb-2 text-muted"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            Add A New Property To Be Listed
          </h6>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <h2>Title</h2>
              <Form.Control
                name="title"
                value={form.title}
                type="text"
                placeholder="Enter Title"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <h4>Asking Price</h4>
          <InputGroup className="mb-3" style={{ width: "300px" }}>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              name="price"
              value={form.price}
              type="number"
              placeholder="Asking Price (Number)"
              onChange={handleChange}
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup className="mb-3" style={{ width: "510px" }}>
            <InputGroup.Text>Type of Property:</InputGroup.Text>
            <Form.Select
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              {propertyTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </InputGroup>

          <Row className="mb-3">
            <InputGroup>
              <InputGroup.Text>Description</InputGroup.Text>
              <Form.Control
                name="description"
                as="textarea"
                placeholder="Please Enter Description of the property"
                onChange={handleChange}
              />
            </InputGroup>
          </Row>

          <Form.Group className="mb-3">
            <h4>Address</h4>
            <Form.Control
              name="address"
              value={form.address}
              placeholder="1234 Main St, Apartment, studio, or floor"
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <h5>City</h5>
              <Form.Control
                name="city"
                value={form.city}
                placeholder="City"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <h5>State</h5>
              <Form.Control
                name="state"
                value={form.state}
                placeholder="State"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <h5>Zip</h5>
              <Form.Control
                name="zipCode"
                value={form.zipCode}
                placeholder="Zip Code"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <h5>Upload Images</h5>
            <Form.Control
              type="file"
              name="photo"
              accept=".jpg,.jpeg,.png"
              onChange={handleFile}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              marginTop: "15px",
              boxShadow: "10px 10px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            Create New Listing
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreatePropertyPage;
