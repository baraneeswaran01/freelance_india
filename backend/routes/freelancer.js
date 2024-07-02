const express=require("express");
const router=express.Router();
const {freelancerRegister,getFreelancers} = require("../controllers/FreelancerController");
router.route("/freelancer/new").post(freelancerRegister)
router.route("/freelancers").get(getFreelancers)
module.exports=router;