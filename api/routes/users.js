const route = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//UPDATE
route.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                }
            ,{new:true}
            );
            res.status(200).json(updatedUser);
        } catch (err){
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("you can update only your account");
    }
   
} )

//DELETE
route.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id);//if(user) condition
            try{
                await Post.deleteMany({ username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has been deleted...");
            } catch (err){
                res.status(500).json(err);
            }
            
        } catch (error) {
            res.status(404).json("User doesn't exist!");
        }
    } else {
        res.status(401).json("you can delete only your account");
    }
   
} )

//GET USER
route.get("/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others);
        
    } catch (err) {
        res.status(500).json(err);
        
    }
})

module.exports = route;