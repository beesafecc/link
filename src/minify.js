const { minify } = require("html-minifier-terser");
const fs = require("fs");

const html = fs.readFileSync("src/index.html", "utf8");

minify(html, {
  collapseWhitespace: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  minifyCSS: true,
  minifyJS: true,
}).then((result) => {
  fs.writeFileSync("public/index.html", result);
  console.log("✅ index.html 已压缩完成 并保存到 public 目录");
});
