const { readFileSync, readdir } = require("fs");
const path = require("path");
const esbuild = require("esbuild");

function buildAll(err, files) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  files.forEach((file) => {
    const ext = path.extname(file);
    const jsFile = file.replace(ext, ".js");
    esbuild
      .build({
        entryPoints: [`./src/${file}`],
        bundle: true,
        format: "iife",
        minify: true,
        outfile: `./dist/${jsFile}`,
      })
      .then(() => {
        const path = `./dist/${jsFile}`;
        const script = readFileSync(path);
        console.log(`// ${path}`);
        console.log(`javascript:${script.toString()}`);
      })
      .catch(() => process.exit(1));
  });
}

const sketchDir = path.join(__dirname, "src");
readdir(sketchDir, buildAll);
