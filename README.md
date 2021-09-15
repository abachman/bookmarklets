l'il bookmarklet to get a slugged branch name from a Jira ticket. This is designed to work with the garbage css classes in the current SPA version of Jira and the jQuery library already included in the page.

e.g., for a ticket in a modal dialog like

```
+-------------------------------
|  [⚡️] Epic / [v] TICKET-42
|
|  Summary goes here
|  [button] [button] [button]
|
```

becomes `feature/TICKET-42-summary-goes-here`


### USING

- create a bookmark
- edit the URL
- type in `javascript:` and paste the contenst of dist/jira-git-branch.js after it
- click on bookmark while looking at ticket in a modal dialog (open board, click on ticket)

### TODO

make it work while looking at a standalone ticket page


### HACKING

- `git clone` this project
- change src/jira-git-branch.ts
- `yarn build`
- follow steps above