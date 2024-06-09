import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    ignores: ['node_modules'],
  },
];
