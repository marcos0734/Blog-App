const { $, id } = require('@hapi/joi/lib/base');
const jwt = require ("jsonwebtoken")
const blog = require('../model/schemas/blogSchema');
const commentSchema = require("../model/schemas/commentSchema")

const createBlog = async (req, res) => {
    try {
        let Blog = new blog({ ...req.body });
        let result = Blog.save();
        res.send({
            status: 201,
            message: "Created Successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(403).json({
            status: "failed",
            message: "Failed to create blog"
        })
    }
}

const blogList = async (req, res) => {
    try {
        const allBlog = await blog.find();
        console.log(allBlog)

        res.status(202).send({
            status: "success",
            message: "Your Blogs", allBlog
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: "Failed",
            message: "No Blogs", err
        })
    }
}

const blogDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const userblogs = await blog.findById(id)
            .populate('blog', { title: 1, description: 1, likes: 1, _id: 0 });
        const comment = await commentSchema.find({ blogId: id })
            .select({ comment: 1, createdAt: 1, _id: 0 })
            .populate('user', { name: 1, _id: 0 })
        var Data = {
            "Title": userblogs.title,
            "Description": userblogs.description,
            "Comments": comment,
        }
        res.status(202).json({
            status: 202,
            message: "Blog Detail", Data
        })

    } catch (err) {
        console.log(err)
        res.status(405).json({
            status: "Failed",
            message: "Data not found", err
        })
    }
}

const blogLike = async (req, res) => {
    let { id, status } = req.params;
    try {
        const userLike = await blog.findOne({_id:id}).exec();
        console.log(userLike)
        let likes = await userLike.likes
        if (status == "true"){
            likes += 1;
        } else{
            likes -= 1;
        }
        blogLike.likes = likes;
        await blog.findByIdAndUpdate(id,blogLike,{new:true,runValidators:true});
        res.status(202).send({
            status:"sccessfull",
            message:"Like Successfull",
        })
    } catch (err) {
        console.log(err)
        res.status(405).json({
        message:"Dislike"
        })
    }
}

module.exports = {
    createBlog,
    blogList,
    blogDetail,
    blogLike
}
