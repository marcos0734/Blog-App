const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        require:true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, //yha se us table ka object id nikala h
        required : true,
        ref : 'user' //ye user schema walo table ka ref liye h uske collection ka name humne user rkha tha
    },
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'blog'
    }
})

commentSchema.set('timestamps',true);
module.exports=mongoose.model('comment',commentSchema);