module.exports = {
  parserOptions: {
    project: __dirname + '/tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: '@stencila/eslint-config/eslint-config-stencil',
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@stencil/ban-prefix': 'off',
    '@stencil/decorators-style': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars-experimental': 'error',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
}
