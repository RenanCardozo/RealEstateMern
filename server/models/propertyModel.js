const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { 
    type: String, 
    required: true,
    enum: ["SingleFamily", "SemiDetached", "Townhome", "Condo", "Multifamily", "Apartment", "Land" ] },
  location: {
    address: { type: String, required: true },
    city: { 
      type: String,
      required: true,
      default: '' },
    state: { type: String, required: true },
    zipCode: { type: String },
  },
  price: { 
    type: Number, 
    required: true,
    default: 0 },
  photo: { type: String , required: false},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports.Property = mongoose.model("Property", PropertySchema);
