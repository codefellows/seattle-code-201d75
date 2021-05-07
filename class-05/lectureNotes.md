# Lecture Notes

## css

### designing a webpage
- create an idea of the layout before you write the HTML
- identify the parts you need first 
- add other things and play with the balance
- write your html to fit your design, not the other way around

### controlling layout
How to get stuff to go where I want it to!
- positioning
- float
- flexbox ** later
- grid ** later

## Branches in git/github

To create a new branch:
- `git checkout -b branchName`

Do your work and save your files then a-c-p to that branch name
- `git add allMyFiles.js`
- `git commit -m "adds all my files"`
- `git push origin branchName`

Go to github.com
- accept or create a pull request for the branch
- merge the branch

Update your local repo with the current version of main
- `git checkout main`
- `git pull origin main`

Optional
- delete branch locally
  - `git branch -d localBranchName`
- delete branch remotely
  - `git push origin --delete remoteBranchName`