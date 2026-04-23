import dotenv from "dotenv";

dotenv.config();

function errorHandler(err,req,res,next){

    const response = {
        message:err.message
    }

    if(process.env.ENV_ENVIROVEMENT === "developement"){
        response.stack = err.stack
    }

    res.status(err.status).json(response);
}

export default errorHandler;