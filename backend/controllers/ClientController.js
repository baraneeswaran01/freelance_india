const express = require('express');
const Client = require('../models/ClientModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const sendJwtToken = require('../utils/jwt');

// GET all clients -/api/v1/clients
exports.getClients =catchAsyncError(async (req, res) => {
  
    const clients = await Client.find();
    res.json({
        success:true,
        count: clients.length,
        clients
    });
});



// Create one client -/api/v1/client/new
exports.clientRegister = catchAsyncError(async (req, res) => {
  const client = await Client.create(req.body);

  sendJwtToken(client,200,res)
    // res.status(201).json({
    //     success:true,
    //     client
    // });

});






