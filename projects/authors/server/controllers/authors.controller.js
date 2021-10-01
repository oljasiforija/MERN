const Authors = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) =>{
    Authors.find()
    .then(allAuthors => res.json({results:allAuthors}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.getSingleAuthor = (req, res) => {
    Authors.findOne({_id:req.params._id})
    .then(singleAuthor => res.json({results:singleAuthor}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.createAuthor = (req, res) => {
    Authors.create(req.body)
    .then(newAuthor => res.json({results:newAuthor}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.updateAuthor = (req, res) => {
    Authors.updateOne({_id:req.params._id},
    {$set: {name:req.body.name}},{runValidators:true})
    .then(singleAuthor => res.json({results:singleAuthor}))
    .catch(err => res.json({message:"bummer", err}))
}
// module.exports.findOneAndUpdateAuthor = (req,res) => {
// Authors.findOneAndUpdate({_id:req.params.id},req.body, {runValidators:true, new:true,useFindAndModify:false})
// .then(data => res.json({results: data}))
// .catch(err => res.json(err.errors))}

module.exports.deleteAuthor = (req,res) => {
    Authors.deleteOne({_id:req.params._id})
    .then(deleteAuthor => res.json({results:deleteAuthor}))
    .catch(err => res.json({message:"bummer", err}))
}