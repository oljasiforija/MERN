const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors")

app.use(express.json(),express.urlencoded({extended:true}));
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/project_manager.routes")(app);
app.listen(port,()=>console.log("hello from the otter side"))