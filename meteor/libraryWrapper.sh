# Setup dir and repo
mkdir underscore-string
cd underscore-string
git init

# Make some files we'll need
touch README.md package.js smart.json

# Add the submodule and checkout the desired branch
git submodule add git://github.com/epeli/underscore.string.git lib/underscore.string
cd lib/underscore.string
git co v.2.2.0rc

[EDIT THE FILES CREATED ABOVE, SEE REPO: https://github.com/possibilities/meteor-underscore-string]

[CREATE THE REMOTE REPO ON GITHUB (or wherever)]

# Setup the remote
git remote add origin https://github.com/possibilities/meteor-underscore-string.git

# Commit and release
cd -
git add . && git ci -am'init' && git push origin master
mrt release . # Publishes to https://atmosphere.meteor.com
