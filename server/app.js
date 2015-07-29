// dont commit node-modules to get...they're heavy and don't need to be shared with other developers(takes up band-width)
//also ignore .ds file store (anytime you nav to finder it creates a store file - just infor that mac osx uses to give infor for finder display)
//create a .gitignore file in root directory and add the files you want to ignore
//npm = node package manager (handles installation of dif techs for our project)
//head to npm and you can install all packages from there - bower is another package manager(needs npm to work)
//you can create your own package and host it and post it to npm
//pull in express w/ most projects npm install express --save (and path maybe...npm path)
//when someone pulls a project from git and starts to work on it when he runs ***npm install your computer will run through all the node modules looking for packages that need to be installed so you dont ahve to post heavy packages
//can even do bootstrap and jquery - you can reinstall if a new version comes out or in the file manager remove a version date and it will update regularly
//you can aso uninstall w/ npm uninstall (name) --save by doing that it removes dependencies from package.json
//1) npm init 2)npm install 3)git init ( run git stauts to check -go to .gitignore and add idea folder, run git status and it wont be there)
