const Products = require("../models/project_manager.model");

module.exports.findAllProducts = (req, res) =>{
    Products.find()
    .then(allProducts => res.json({results:allProducts}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.getSingleProduct = (req, res) => {
    Products.findOne({_id:req.params._id})
    .then(singleProduct => res.json({results:singleProduct}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.createProduct = (req, res) => {
    Products.create(req.body)
    .then(newProduct => res.json({results:newProduct}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.updateProduct = (req, res) => {
    Products.updateOne({_id:req.params._id},
    {$set: {title:req.body.title, price:req.body.price, description:req.body.description}})
    .then(singleProduct => res.json({results:singleProduct}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.deleteProduct = (req,res) => {
    Products.deleteOne({_id:req.params._id})
    .then(deleteProduct => res.json({results:deleteProduct}))
    .catch(err => res.json({message:"bummer", err}))
}