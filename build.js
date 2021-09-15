require("esbuild")
  .build({
    entryPoints: ["./src/jira-git-branch.ts"],
    bundle: true,
    format: "iife",
    minify: true,
    outfile: "./dist/jira-git-branch.js",
  })
  .catch(() => process.exit(1));
