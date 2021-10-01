const mongoose = require("mongoose");
const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name."],
        minLength:[3, "Needs to be at least 3 characters long."]
    }

})
const Authors = mongoose.model("Authors",AuthorsSchema)
module.exports = Authors;