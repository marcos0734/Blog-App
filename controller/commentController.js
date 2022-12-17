const commentSchema = require("../model/schemas/commentSchema")


const userComment = async(req, res) =>{
    try{
        let addComment = new commentSchema(req.body);
        const Data = addComment.save();
        res.status(201).send({
            status:"success",
            message:"Comment Added Successfully"
        })
    }catch(err){
        console.log(err)
    }
}

module.exports={
    userComment
}