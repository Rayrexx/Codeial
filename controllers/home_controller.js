const Post = require("../models/post");
const User = require("../models/user");

module.exports.home = async function(req, res) {

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

    try{
        //Populate the user of each post
        let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
        
        let users = await User.find({})

        return res.render('home', {
            title: 'Home',
            posts: posts,
            all_users: users
        });
    }catch(err){
        console.log('Error',err);
        return;
    }
}