module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': 'warn',
        indent: [2, 4],
        quotes: [2, 'single', { avoidEscape: true }],
        semi: [2, 'never'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-unused-vars': 'warn',
        'react-hooks/exhaustive-deps': 'error',
        camelcase: 'error',
        'no-console': 'warn',
        'no-var': 'error',
        'prefer-const': 'warn',
        'max-len': ['warn', { code: 150 }],
        'object-curly-spacing': ['warn', 'always'],
    },
}
