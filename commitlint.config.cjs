// 新建文件并键入如下内容
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['fix', 'to', 'feat', 'docs', 'style', 'refactor', 'test', 'chore', 'merge'],
    ],
  },
};
