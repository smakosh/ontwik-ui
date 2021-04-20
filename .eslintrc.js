module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
