const { default: mongoose } = require("mongoose");
console.log(process.env.URL)

//yha hum monogo db se connectiviy ka code likhenge
mongoose.connect(process.env.URL, {useNewUrlParser:true});
const connection=mongoose.connection;
connection.once('open',function(){
    console.log("MongoDB connection Extablished Successfully...!");
})
