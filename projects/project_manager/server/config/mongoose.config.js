const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project_manager",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("db is cooooonected"))
.catch(err=>console.log("maybe its not", err))