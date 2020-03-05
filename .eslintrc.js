module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:prettier/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/max-attributes-per-line": "off",
    "vue/require-default-prop": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/component-name-in-template-casing": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-spacing": "off"
  }
}
