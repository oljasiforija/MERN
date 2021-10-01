const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) =>{
    Jokes.find()
    .then(allJokes => res.json({results:allJokes}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.getSingleJoke = (req, res) => {
    Jokes.findOne({_id:req.params._id})
    .then(singleJoke => res.json({results:singleJoke}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
    .then(newJoke => res.json({results:newJoke}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.updateJoke = (req, res) => {
    Jokes.updateOne({_id:req.params._id},
    {$set: {setup:req.body.setup, punchline:req.body.punchline}})
    .then(singleJoke => res.json({results:singleJoke}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.deleteJoke = (req,res) => {
    Jokes.deleteOne({_id:req.params._id})
    .then(deleteJoke => res.json({results:deleteJoke}))
    .catch(err => res.json({message:"bummer", err}))
}