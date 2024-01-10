// .prettierrc.mjs是一个用于配置Prettier插件(npm包)的配置文件。在项目中，我们可以根据该文件来统一整个项目的代码风格(vscode的拓展应用Prettier也会默认读该配置文件)
//规则： https://www.prettier.cn/docs/options.html#print-width
// 对于一次性命令，当你想排除一些文件而不将它们添加到 .prettierignore 时，否定模式可以派上用场：prettier . "!**/*.{js,jsx,vue}" --write
export default {
  //缩进长度
  tabWidth: 2,
  //句末使用分号
  semi: true,
  //单行长度
  printWidth: 80,
  //使用单引号
  singleQuote: true,
  //对vue中的script及style标签缩进
  vueIndentScriptAndStyle: true,
  //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  //   arrowParens: 'always',
  singleAttributePerLine: true,
  bracketSameLine: true,
};
