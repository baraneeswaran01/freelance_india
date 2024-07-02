const express = require('express');
const Freelancer = require('../models/FreelancerModel');
const catchAsyncError = require('../middleware/catchAsyncError');

// GET all Freelancers -/api/v1/client
exports.getFreelancers =catchAsyncError(async (req, res) => {
  
    const freelancers = await Freelancer.find();
    res.json({
        success:true,
        count: freelancers.length,
        freelancers
    });
});



// Create one Freelancer --/api/v1/client/new
exports.freelancerRegister= catchAsyncError(async (req, res) => {
  const freelancer = await Freelancer.create(req.body);

    res.status(201).json({
        success:true,
        freelancer
    });

});






