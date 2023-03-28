const { default: mongoose } = require("mongoose");
const { Property } = require("../models/propertyModel");
const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const process = require("process");

// const usersRoutes = require("../routes/users.routes");

// const email = User.email;
// gets all properties
module.exports.getAllProperties = async (req, res) => {
  try {
    let filter = {};

    if (req.query.price) {
      filter.price = req.query.price;
    }

    if (req.query.city) {
      filter["location.city"] = req.query.city;
    }

    if (req.query.propertyType) {
      filter.propertyType = req.query.propertyType;
    }

    const properties = await Property.find(filter).populate("creator");
    return res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// gets a single property
module.exports.getPropertyDetail = async (req, res) => {
  try {
    const property = await Property.findOne({ _id: req.params.id });
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.createProperty = async (req, res) => {
  const { token, newProperty } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded, newProperty);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const property = new Property(newProperty);
    property.creator = user;
    const newProperties = await property.save();
    //should add this property to the user's property list
    User.findByIdAndUpdate(
      decoded.id,
      { $push: { allProperties: newProperties._id } },
      { new: true }
    )
    user.allProperties.push(newProperties._id);
    console.log("This is it what we neeeed",user.populated("allProperties"))
    return res.status(201).json(newProperties);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.updateProperty = async (req, res) => {
  const { token } = req.body;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const user = await User.findOne({ token }).session(session);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const property = await Property.findById({ _id: req.params.id }).session(
      session
    );
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    const response = await property.updateOne(req.body);
    await session.commitTransaction();
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.deleteProperty = async (req, res) => {
  const { token } = req.body;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const user = await User.findOne({ token }).session(session);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const property = await Property.findById({ _id: req.params.id }).session(
      session
    );
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    const response = await property.deleteOne();
    await session.commitTransaction();
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
