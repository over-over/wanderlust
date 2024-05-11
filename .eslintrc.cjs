module.exports = {
  root: true,
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    window: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-use-before-define': ['warn'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-namespace': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [
          'error',
          { before: false, after: true },
        ],
      },
      plugins: ['@typescript-eslint'],
    },
  ],
  plugins: ['import', 'react', 'react-hooks'],
  rules: {
    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off',
    // same as import/named
    'import/no-unresolved': 'off',
    'import/prefer-default-export': ['off', { target: 'any' }],
    'arrow-body-style': ['off', 'as-needed'],
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
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'global-require': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['webpack.config.js'] },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    'no-useless-escape': 'warn',
    'no-empty': 'warn',
    'keyword-spacing': ['error', { after: true, before: true }],
    'no-unused-vars': 'warn',
    'no-unreachable': 'warn',
    'no-implicit-coercion': 'warn',
    'prefer-const': 'warn',
    'no-fallthrough': 'warn',
    'no-inner-declarations': 'warn',
    // There is a maxDepth option available to prevent full expansion of very deep dependency trees:
    // This is not necessarily recommended, but available as a cost/benefit tradeoff mechanism for reducing total project lint time, if needed.
    'import/no-cycle': ['warn', { maxDepth: 3 }],
    'import/default': 'warn',
    'import/namespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-redeclare': 'warn',
    'no-else-return': 'warn',
    eqeqeq: 'warn',
    'no-undef': 'warn',
    'no-extra-boolean-cast': 'warn',
    yoda: 'warn',
    'wrap-iife': 'warn',
    'max-len': [
      'warn',
      { code: 100, tabWidth: 4, ignoreComments: true, ignoreStrings: true },
    ],
    'no-extra-semi': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'no-extra-parens': ['error', 'functions'],
    'no-regex-spaces': 'error',
    'no-unsafe-negation': 'error',
    curly: 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'no-div-regex': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'no-unused-labels': 'error',
    'no-useless-return': 'error',
    'no-cond-assign': 'error',
    'eol-last': ['error', 'always'],
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral > *'],
        VariableDeclarator: 'first',
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'arrow-parens': ['error', 'always'],
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'block-spacing': 'error',
    'line-comment-position': 'off',
    'no-case-declarations': 'off',
    'no-use-before-define': 'off',
    'import/no-restricted-paths': [
      'warn',
      {
        zones: [
          {
            target: './api/schemas',
            from: '.',
            except: ['./api/schemas'],
            message: 'Импорты можно делать только из папки src/api/schemas',
          },
          {
            target: './api/types',
            from: '.',
            except: ['./api/schemas'],
            message: 'Импорты можно делать только из папки src/api/schemas',
          },
          {
            target: './api/requests',
            from: '.',
            except: [
              './api/schemas',
              './api/types',
              './api/instance',
              './libs/request',
              './api/requests',
            ],
            message:
              'Импорты можно делать только из папки src/api/schemas , src/api/types , src/api/instance , src/libs/request , src/api/requests',
          },
          {
            target: './api/queries',
            from: './src',
            except: [
              './libs/react-query-utils',
              './api/requests',
              './libs/request',
              './api/queries',
            ],
            message:
              'Импорты можно делать только из папки src/libs/react-query-utils , src/api/requests , src/libs/requests , src/api/queries',
          },
          {
            target: './api/mutations',
            from: '.',
            except: [
              './libs/react-query-utils',
              './api/requests',
              './libs/request',
              './api/mutations',
            ],
            message:
              'Импорты можно делать только из папки src/libs/react-query-utils , src/api/requests , src/libs/requests , src/api/mutations',
          },
          {
            target: './shared',
            from: '.',
            except: ['./shared'],
            message: 'Импорты можно делать только из папки src/shared',
          },
          {
            target: './theme',
            from: '.',
            except: ['./theme'],
            message: 'Импорты можно делать только из папки src/theme',
          },
          {
            target: './constants',
            from: '.',
            except: ['./constants'],
            message: 'Импорты можно делать только из папки src/constants',
          },
          {
            target: './libs',
            from: '.',
            except: ['./libs'],
            message: 'Импорты можно делать только из папки src/libs',
          },
        ],
      },
    ],
  },
};
