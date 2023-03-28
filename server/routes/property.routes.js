const express = require('express');
const PropertyController = require('../controllers/property.controller');


module.exports = (app) =>{
    app.get('/api/properties', PropertyController.getAllProperties)
    app.post('/api/properties', PropertyController.createProperty)
    // app.get('/api/properties/cities', PropertyController.getAllProperty)
    app.get('/api/properties/:id', PropertyController.getPropertyDetail)
    app.put('/api/properties/:id', PropertyController.updateProperty)
    app.delete('/api/properties/:id', PropertyController.deleteProperty)
}

