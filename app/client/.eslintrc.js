module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [2, "single", { "avoidEscape": true }],
    "prettier/prettier" : [
      "error",
      {
        "traillingComma": "es5",
        "singleQuote": true,
        "printWidth": 120
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}