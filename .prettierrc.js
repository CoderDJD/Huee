module.exports = {
  semi: false,
  overrides: [
    {
      files: ["*"],
      options: {
        jsxBracketSameLine: true,
        semi: true,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "avoid",
      },
    },
  ],
};
