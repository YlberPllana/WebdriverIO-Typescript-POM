// eslint.config.ts
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.ts'],
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      node: 'readonly',
      mocha: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
  },
};
