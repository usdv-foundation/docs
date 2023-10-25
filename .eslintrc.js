require('@rushstack/eslint-patch/modern-module-resolution');

// @ts-check
/** @type {import('eslint').ESLint.ConfigData} */

const eslintConfig = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: [
        '**/__tests__/*.test.ts',
        '**/dist/**',
        '**/node_modules/**',
        '**/generated/**',
        '**/typechain/**',
        '**/typechain-types/**',
        '**/coverage/**',
        '**/exports/**',
    ],
    settings: {
        'import/internal-regex': '^@layerzerolabs/',
        'import/external-module-folders': ['node_modules', '.yarn'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            [require.resolve('eslint-import-resolver-typescript')]: {
                alwaysTryTypes: true,
                project: [
                    'v1/**/tsconfig.json',
                    'v2/**/tsconfig.json',
                    'ops/tsconfig.json',
                    'ops-utilities/tsconfig.json',
                    'config/tsconfig.json',
                ],
            },
        },
    },
    rules: {
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            { args: 'none', varsIgnorePattern: 'logger|_', argsIgnorePattern: '_' },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-unresolved': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '^@layerzerolabs/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                distinctGroup: true,
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
    },
};
module.exports = eslintConfig;
