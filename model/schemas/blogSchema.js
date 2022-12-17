const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
    },

    blogpic:  String,

    likes:{
        type:Number,
        default:0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, //yha se us table ka object id nikala h
        required : true,
        ref : 'user' //ye user schema walo table ka ref liye h uske collection ka name humne user rkha tha
    }
})

blogSchema.set('timestamps',true);
module.exports=mongoose.model('blog',blogSchema);