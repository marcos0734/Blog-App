const user=  require('./uservalidationSchema')


module.exports = {
    validationSchema: async (req,res,next) =>{
        const value = await user.validationSchema.userSignup.validate(req.body,{abortEarly:false})

        if(value.error){
            res.send({
                message: value.error.details[0].message
            })
        }
        else{
            next()
        }
    }
    ,

    loginUserValidation: async (req, res, next) =>{
        const value = await user.validationSchema.loginUser.validate(req.body,{abortEarly:false}) 

        if (value.error){
            res.send({
                message: value.error.details[0].message
            })
        }
        else {
            next()
        }
    }
}
