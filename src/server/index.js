require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-runtime"
  ],
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".graphql"]
});
require("./server");
