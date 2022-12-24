const mongoose=require("mongoose");

const dbURI="mongodb+srv://Nagaveni:veni%40123@cluster0.hxsjxue.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(dbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("MongoDB is connected")).catch((error)=>console.log(error.message))
