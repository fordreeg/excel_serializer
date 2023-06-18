module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'max-len': ['error', { code: 100 }],
    semi: [2, 'never'],
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
