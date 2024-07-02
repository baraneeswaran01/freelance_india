const catchAsyncError = require("../middleware/catchAsyncError");

const sendJwtToken=catchAsyncError(async(user,statusCode,res)=>{

    const token=user.getJwtToken()
    res.status(statusCode).cookie("token",token,{
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
        httpOnly:true,
        sameSite: "Strict",// Add sameSite attribute for better security
    }).json({
    success:true,
    user
   })

    
})

module.exports=sendJwtToken;