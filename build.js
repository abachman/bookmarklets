const { readFileSync } = require("fs");

require("esbuild")
  .build({
    entryPoints: ["./src/jira-git-branch.ts"],
    bundle: true,
    format: "iife",
    minify: true,
    outfile: "./dist/jira-git-branch.js",
  })
  .then(() => {
    const path = "./dist/jira-git-branch.js";
    const script = readFileSync(path);
    console.log(`// ${path}`);
    console.log(`javascript:${script.toString()}`);
  })
  .catch(() => process.exit(1));
