// dont commit node-modules to get...they're heavy and don't need to be shared with other developers(takes up band-width) when pushing to heroku your pushing through git and you dont want to push unnecessary files to git
//(. means it is a hidden file) also ignore .ds file store (anytime you nav to finder it creates a store file - just infor that mac osx uses to give infor for finder display)
//create a .gitignore file in root directory and add the files you want to ignore
//npm = node package manager (handles installation of dif techs for our project)
//head to npm and you can install all packages from there - bower is another package manager(needs npm to work)
//you can create your own package and host it and post it to npm
//pull in express w/ most projects npm install express --save (and path maybe...npm path)
//when someone pulls a project from git and starts to work on it when he runs ***npm install your computer will run through all the node modules looking for packages that need to be installed so you dont ahve to post heavy packages
//can even do bootstrap and jquery - you can reinstall if a new version comes out or in the file manager remove a version date and it will update regularly
//you can aso uninstall w/ npm uninstall (name) --save by doing that it removes dependencies from package.json
//1) npm init 2)npm install 3)git init ( run git stauts to check -go to .gitignore and add idea folder, run git status and it wont be there)
// 4)git add. 5)then git commit 6)then heroku create 7) git remote -v (will list git remote applications, possible push location) 8) git remote add(go to github and start new repo copy paste)
//we now have a place to push to and now lets write the application **express simplifies code and provides a framework can also deal with (404 file errors) will fix or at least tell you how to fix it)
//
//Express was created as a need in Ruby/Sinatra to help save time - createseasy routing to nodes in callbacks and responses.
//Middleware STACK : able to make server-to-server calls, gives us additional points of logic to communicate. Client submits form to our server our server uses middleware stack to format it before we send it to another server
//Express = FAST & Simple

var express = require('express');
var app = express();
var path = require('path');

app.set('port',(process.env.PORT || 5000));
//setting port property =  set to functionality of object called process that has an environment with a property of PORT. If this is on heroku use port that is defined OR (operator) use port 5000. We don't have a process.env.PORT set for us so we go to OR and use port 5000
app.get('/', function(req, res){
    //you can even console log out dirname (dirname just represents where the request is coming at in the first place - similar to this keyword)
   res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.listen(app.get('port'), function(){
    //listening event, can be fired anytime (compiler sweep knows when to fire it anyway)
    //console log is not critical nor is any function (that is a optional callback) app.listen...('port') is CRITICAL
    console.log("Hey! Listening on Port: " + app.get('port'));
});
// right now