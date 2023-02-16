const express = require("express")
const collection =require("./mongoose")
const cors =require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/", cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const {email,password}=req.body;

    try{
        const check = await collection.findOne({email:email})
        if(check){
            console.log(check);
            res.json("exist")
        }else{
            res.json("not exist")
        }
    }catch(e){
        res.json("not exist with error")
    }
})


app.post("/signup",async(req,res)=>{
    const {email,name,phoneno,password,}=req.body;

    const data={
        email : email,
        name : name,
        phoneno : phoneno,
        password : password
    }

    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("already exist")
        }else{
            await collection.insertMany([data])
            res.json("added")
        }
    }catch(e){
        res.json("not exist with error")
    }
})

app.listen(8000,()=>{
    console.log("running backend at 8000")
})