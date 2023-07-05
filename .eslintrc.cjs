module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    // React Rules
    'react-refresh/only-export-components': 'warn',
    // TypeScript Rules
    '@typescript-eslint/ban-ts-comment': 'off',
    // JavaScript Rules
    'semi': ['warn', 'always'],
    'no-console': 'warn',
    'no-undef': 'off',
  },
}
