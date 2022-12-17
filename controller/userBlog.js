const user = require("../model/schemas/userSchema");
const userSchema = require('../model/schemas/userSchema');
const blog = require('../model/schemas/blogSchema');
const comment = require('../model/schemas/commentSchema')

const userBlog = async (req, res) =>{
    const id =req.params.id;
    try{
        const allBlog = await blog.find({userId:id}).lean()
        .select({title:1,description:1,likes:1,_id:0})
        var Data = {"myBlog":allBlog}
        res.status(202).json({
            message:"User all blog",Data
        })
    }catch(err){
        console.log(err)
    }
}


const blogUpdate = async (req, res) =>{
    const id = req.params.id;
    try{
        const update = await blog.findByIdAndUpdate(id,req.body,{new:true})
        .select({title:1,description:1,_id:0})
        var Data = {"update":update}
        res.status(202).json({
            message:"User all blog",Data
        })
    }catch(err){
        res.status(400).json({
            status :'failed',
            message: "Something went wrong  you not able to Update"
        })
    }
}

const deleteBlog = async (req, res) =>{
    const id = req.params.id
    try{
        const delBlog = await blog.findByIdAndDelete(id,{new:true})
        var Data = {"Delete":delBlog}
        res.status(202).json({
            message:"User all blog",Data
        })
    }catch(err){
        res.status(405).json({
            message: "Something went wrong  you not able to delete"
        })
    }
}

module.exports ={
    userBlog,
    blogUpdate,
    deleteBlog
}