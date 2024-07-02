const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const clientSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email address"
    }
  },
//   password:{
// type:String,
// required:[true,"plaese enter password"]
//   },
  experience: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  jobDecription:{
    type: String,
  },
  role:{

    type:String,
default:"user"
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});



clientSchema.pre("save",async function(){
 this.password=await bcrypt.hash(this.password,10)
})

clientSchema.methods.getJwtToken=(req,res,next)=>{
return jwt.sign({id:this.id},process.env. JWT_SECRET_KEY,{
  expiresIn:process.env.JWT_EXPIRES_TIME
})
}



const Client = mongoose.model('Client', clientSchema);

module.exports = Client;