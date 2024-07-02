const express=require("express");
const router=express.Router();
const {clientRegister,getClients} = require("../controllers/ClientController");



router.route("/client/new").post(clientRegister)
router.route("/clients").get(getClients)

module.exports=router;