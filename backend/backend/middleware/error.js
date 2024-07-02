const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
  
  
  
   
  
    if (process.env.NODE_ENV === 'development') {
      console.log("Development error handler");
      return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack,
        error: err,
      });
    } 
    
    if (process.env.NODE_ENV === 'production') {
      console.log("Production error handler");
      let message = err.message;
      let error=new Error(message)

if(err.name==="ValidationError"){
    message=Object.values(err.errors).map((value)=>value.message)
    error=new ErrorHandler(message)
}

if(err.name==="CastError"){
    message =`Resource not found : ${err.path}`
    error=new ErrorHandler(message)
}


      return res.status(err.statusCode).json({
        success: false,
        message:error.message || "Internal server error",
      });
    }
      
      return res.status(err.statusCode).json({
        success: false,
        message: 'An unexpected error occurred',
      })
    
  };
  