# Github Workflow

1. Chris makes a change
2. Chris commits on his working branch (NEVER MAIN), and pushes up to a branch of the same name on github
3. Chris submits the pull request and informs his team members
4. Alec reviews the pull request, approves it, and then merges Chris' work with main
5. Everyone on the team adds and commits their own work on their working branch (NOT MAIN)
6. Everyone on the team switches branches from their work branch to main
7. Each person does a `git pull`
8. Each person then jumps back to their individual working branches
9. Each person uses `git merge main`
10. If there are merge conflicts, the person that encountered them will fix them, and then add & commit
11. Each person continues working on their working branches
12. As soon as someone is ready to push their work up, they will start at step 1