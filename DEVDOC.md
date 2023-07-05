# 开发规范

## 开发工具

- 统一使用 VSCode 进行代码开发

- 统一使用 Chrome 浏览器进行代码预览

## Git

所有代码统一托管到 Git 进行管理维护，遵循如下原则：

- main 分支为主分支，不允许 push 代码，所有代码必须通过 PR 进行合并

- 分支类型两种：feature（特性分支）和 fix（修复分支），且分支名必须有意义

例如：`feature/signin-signup` 表示新特性分支，登录注册模块；`fix/password` 表示修复分支，修复密码模块

- 所有 commit 必须有具体意义，具体参考 `commitlint.config.js`

## ESlint

所有代码必须遵循 Eslint 规范，遵循如下原则：

- 非必要情况，不添加新规则

- 代码不允许有 Eslint Error 类型的报错

- 警告类型的报错尽可能修改，除非修改较为复杂，比如：TypeScript 的 any warning

## Prettier

- 先打开 vscode 软件，左下角点击设置 》打开设置》唤出快速搜索条界面

- 接下来先设定自动保存文件，搜索框贴入 `autoSave` 筛出设置项，并把设置项属性选择为 `onFocuschange`

- 设定编辑器默认代码格式化（美化）的插件为 Prettier，同理在搜索设置框贴入 `defaultFormatter`，将配置项选择为 Prettier

- 设定 Prettier 插件保存时自动格式化代码，搜索设置项贴入 `formatOnSave`，将搜索到的项目打钩即可

> 配置完成，就会自动按照 prettier 规则进行代码格式化
