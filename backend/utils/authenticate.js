const catchAsyncError = require("../middleware/catchAsyncError");

exports.isAuthenticatedUser=catchAsyncError(async(req,res,next)=>{

const {token}=req.cookies;
if(!token){
    return next()
}

})
    
