module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  /**
   * 官网相关链接：https://zh-hans.eslint.org/docs/latest/use/configure/ignore#eslintignore-%E6%96%87%E4%BB%B6
   * ESLint 总是遵循一些隐含的忽略规则:
   *  1.忽略 node_modules/
   *  2.忽略点文件（除了 .eslintrc.*），以及点文件夹和它们的内容
   */
  ignorePatterns: ['dist'],
  rules: {
    // 0-忽略 1-warning 2-error
    'prettier/prettier': 0,
    'vue/multi-word-component-names': 0, // 禁用vue文件强制多个单词命名
    '@typescript-eslint/no-explicit-any': [0], //允许使用any
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowedNames: ['that'], // this可用的局部变量名称
      },
    ],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-comment': 0, //允许使用@ts-ignore
    '@typescript-eslint/no-non-null-assertion': 0, //允许使用非空断言
    'no-console': [
      //提交时不允许有console.log
      1,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'warn', //提交时不允许有debugger
  },
};
