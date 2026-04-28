import {body,validationResult} from "express-validator";

const validate = (req,res,next)=>{
            const errors = validationResult(req);

            if(errors.isEmpty()){
                return next();  //  means send data direct to controller.
            }

            //  otherwise the error message was shown
            res.status(400).json({
                errors: errors.array()
            })
        }


export const regidterValidator = [
        body("username").isString().withMessage("username should be a string"),
        body("email").isEmail().withMessage("Email should be a valid structure"),
        validate
        
    ]