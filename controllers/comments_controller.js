const Comment = require('../models/comment');
const Post = require('../models/post');

//create new comment
module.exports.create = function(req,res){
    console.log(req.body);
    Post.findById(req.body.post, function(err,post){

        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                if(err){console.log('Error in creating a comment'); return;}

                post.comments.push(comment);
                post.save();
        
                res.redirect('/');
            });
        }
    });
    

}