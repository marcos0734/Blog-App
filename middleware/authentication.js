const jwt = require ("jsonwebtoken");
const user = require ("../model/schemas/userSchema");

const userAuthentication = async (req,res,next) => {
    let token;
    const {authorization}=req.headers;
    console.log(authorization);
    if(authorization && authorization.startsWith("Bearer")){
        try{
            // get token from header
            token = authorization.split(" ")[1];

            // check what we are getting in token and authorization
            console.log('T  oken',token);
            console.log('Authorization:',authorization);

            // verify token
            const {userId}= jwt.verify(token,process.env.JWT_SECRET_KEY);
            
            // get user from token
            req.user = await user.findById(userId).select('password');
            next();
         }
         catch(error){
            console.log(error);
            res.status(401).send({status: "failed", message:"Unauthrized User"});
         }
    }
    if(!token){
        res.status(401).send({"message": "Unauthrized user no token"})
    }
};

module.exports=userAuthentication