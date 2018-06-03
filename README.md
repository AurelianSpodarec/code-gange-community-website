# code-gange-community-website

## Getting started
##### *Code inside brackets [] is not literal, but meant to be replaced - ex. [REPO URL]*
1. Fork repo
2. Clone _**your fork**_ down to local machine
  * `git clone [REPO URL]`
3. Create new branch to host changes
  * `git checkout -b [NEW BRANCH NAME]`
4. Make changes on new branch
5. Add and commit changes locally
  * `git add .` - Adds all new changes to git's staging
  * `git commit -m [COMMIT MESSAGE]` - Commits staged files/folders locally
6. Check the git logs to make sure your commit is in place and clean up all the commits you have made
  * `git log` - Shows git's log history
7. Push new branch to _**your fork**_ - *if you cloned from your fork and __NOT__ the main repo this will work*
  * `git push origin [BRANCH NAME]` - You can check which branch you are on with *`git branch`*
8. Go to forked repo on Github and change to the branch you pushed
9. If you want to submit changes to original repo submit a pull request

## Project structure
```
  client/ - contains everyones individual code
    [url]/ - [url] should match with the route express is serving on

  public/ - contains files for index route of project
    index.html - main file that is sent to index route

  server/ - contains server code
    server.js - where the project routes live

  index.js - starting file that is executed to run app
```

## Adding a new route to **server/server.js**
1. Add line below all the others
  * `app.use('[YOUR ROUTE URL]', express.static(path.join(__dirname, '../client/[YOUR CLIENT PATH]')));`
2. Create your folder inside **client/** that contains files to server