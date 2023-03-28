import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, UseNavigate } from "react-router-dom";
import axios from "axios";

const Filter = ({ setFilteredProperties }) => {
  const priceOptions = [
    "$100,000+",
    "$200,000+",
    "$300,000+",
    "$400,000+",
    "$500,000+",
    "$600,000+",
    "$700,000+",
    "$800,000+",
    "$900,000+",
    "$1,000,000+",
  ];
  const propertyTypes = [
    "SingleFamily",
    "SemiDetached",
    "Townhome",
    "Condo",
    "Multifamily",
    "Apartment",
    "Land",
  ];
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchData = async () => {

      // fetch distinct city values
      const citiesResponse = await axios.get("/api/properties/cities");
      setCityOptions(citiesResponse.data);

    };
    fetchData();
  }, []);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    filterProperties(event.target.value, selectedCity, selectedType);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    filterProperties(selectedPrice, event.target.value, selectedType);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    filterProperties(selectedType, event.target.value);
  };

  const filterProperties = async (price, city, type) => {
    let queryParams = "";
    if (price && price !== "All") {
      const priceNumber = parseInt(price.replace(/[$,+]/g, ""));
      queryParams += `price=${priceNumber}&`;
    }
    if (city) {
      queryParams += `city=${city}&`;
    }
    if (type) {
      queryParams += `type=${type}&`;
    }

    const response = await axios.get(`/api/properties?${queryParams}`);
    setFilteredProperties(response.data);
  };

  return (
    <div className="container-fluid App">
      <nav
        className="nav"
        style={{ display: "flex", justifyContent: "space-evenly", marginTop:'20px'}}
      >
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="price-range">Price Range</InputLabel>
          <Select className="shadow-lg" value={selectedPrice} onChange={handlePriceChange}>
            {priceOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="property-type">Type</InputLabel>
          <Select className="shadow-lg" value={selectedType} onChange={handleTypeChange}>
            {propertyTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
                </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
          <Select className="shadow-lg" value={selectedCity} onChange={handleCityChange}>
            {cityOptions.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </Select>
        </FormControl>
      </nav>
    </div>
  );
};

export default Filter;
