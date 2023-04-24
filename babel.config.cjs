module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    // ["@babel/preset-react", { runtime: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
