l'il bookmarklets and some code to make them easier to build

# Installing

- create a bookmark in Chrome
- edit the URL
- type in `javascript:` and paste the contents of dist/\*.js after it

# HACKING

## building

- `git clone` this project
- change src/whatever.ts
- `npm run build`

look at your cool new bookmarklet

## writing bookmarklets

Bookmarklets are weird little snippets of executable javascript that run in the context of the page you're looking at.

They can do anything to the page that the js in the page can do to itself. Fiddle with `localStorage`, talk to the `window` object, open new URLs, sniff form data, add or remove DOM elements, etc.

This tool transpiles and builds the files in `src/` as self-executing anonymous functions, or [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)s so that you can drop them into bookmarklets without worrying about the details.

You can even require dependencies! Check out `src/big-dependency-haver.ts`, it doesn't do _anything_, but it definitely does it with lodash.

The maximum size for a bookmarklet is probably like 32KB, so keep that in mind. If you want a dependency which is available from a CDN, consider using [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or old school script element appending to require it.

---

# Included

## jira-git-branch

Turns the Jira ticket you are looking at into a slugged branch name for git. This will only work with the garbage css classes in the version of Jira I'm looking at and the jQuery library already included in the page.

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

### Usage

click on bookmarklet while looking at ticket in a modal dialog (open board, click on ticket)

### TODO

make it work while looking at a standalone ticket page
