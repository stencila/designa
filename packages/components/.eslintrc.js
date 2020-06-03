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
