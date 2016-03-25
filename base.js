module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "rules": {
    "strict": 0,
    "indent": [
      2,
      "tab"
    ],
    "quotes": [
      2,
      "double"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "no-console": 0
  },
  "env": {
    "es6": true,
    "node": true
  },
  "ecmaFeatures": {
    "experimentalObjectRestSpread": true,
    "modules": true
  }
};
