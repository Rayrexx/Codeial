const Post = require("../models/post");

module.exports.home = function(req, res) {
    //console.log(req.cookies);
    //res.cookie('user_id',25);
    
    //Method 1:- Showing posts without populating the user(facing issues while getting to show the username with posts)

    // Post.find({}, function(err, posts){
    //     if(err){console.log('Error in fetching posts'); return;}

    //     return res.render('home', {
    //         title: 'Home',
    //         posts: posts
            
    //     });   
    
    // });

    //Method 2:-
    //Populate the user of each post
    Post.find({}).populate('user').exec(function(err, posts){
            if(err){console.log('Error in fetching posts'); return;}
    
            return res.render('home', {
                title: 'Home',
                posts: posts
                
            });

        })
}