module.exports = {
  "globals": {
    "__DEV__": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "plugins": ["react"],
  "rules": {
    "eqeqeq": ["error", "always", { "null": "always" }],
    "import/prefer-default-export": "off",
    "max-len": ["error", { "tabWidth": 2 }],
    "no-multiple-empty-lines": [
      "error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
    "no-unused-vars": "error",
    "object-curly-newline": ["error", { "consistent": true }],
    "operator-linebreak": [
      "error", "before", { "overrides": { "=": "after" } }
    ],
    "react/destructuring-assignment": "off",
    "react/jsx-curly-spacing": [2, {
      "allowMultiline": false,
      "children": true
    }],
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": "error",
    "react/jsx-uses-vars": 2,
    "react/prop-types": 0,
    "sort-imports": "error",
    "sort-keys": "error"
  }
}