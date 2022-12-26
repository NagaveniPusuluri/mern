const express=require("express");
const users = require("../models/userSchema");
const router=express.Router();

router.get("/",(req,res)=>{
    console.log("connect");
});
router.post("/register",async(req,res)=>{
    //console.log(req.body);
    const {name,email,age,mobile,work,address,des}=req.body;
    if(!name || !email || !age || !mobile || !work || !address || !des){
        res.status(404).json("Please fill the data correctly" );
    }
    try{
        const preuser=await users.findOne({email:email});
        console.log(preuser);
        if(preuser){
            res.status(404).json("This user is already prasent");
        }else{
            const adduser= new users({
                name,email,age,mobile,work,address,des
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    }
    catch(error){
        res.status(404).json(error)
    }
})

module.exports=router;
