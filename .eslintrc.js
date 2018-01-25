module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/anchor-is-valid": 0
  }
};
