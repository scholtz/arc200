module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.algo.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        'no-undef': 'off',
        'max-classes-per-file': 'off',
        'no-bitwise': 'off',
        'operator-assignment': 'off',
        'prefer-template': 'off',
        'prefer-destructuring': 'off',
        // Puya/ARC4 contract conventions intentionally use a leading underscore for private
        // helpers and snake_case for identifiers that mirror the ARC200/ARC4 spec's own casing
        // (e.g. arc200_Transfer, sender_balance) and PascalCase for arc4.Struct/type constructors.
        'no-underscore-dangle': 'off',
        camelcase: 'off',
        'new-cap': 'off',
      },
    },
  ],
};
