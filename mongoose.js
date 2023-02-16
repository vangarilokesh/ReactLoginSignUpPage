const mongoose =require ("mongoose");
console.log("Lokesh");
mongoose.connect("mongodb://127.0.0.1:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})


const newSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true,
        unique:true
    },
    name :{
        type:String,
        required:true,
    },
    phoneno :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema);

module.exports=collection