const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a title."],
        minLength:[3, "Needs to be at least 3 characters long."]
    },
    price: Number,
    description: {
        type: String,
        required: [true, "Must have a description."],
        minLength:[5, "Needs to be at least 5 characters long."]
    },

})
const Products = mongoose.model("Products",ProductsSchema)
module.exports = Products;