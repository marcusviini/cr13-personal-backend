module.exports = {
    env: {
        es6: true,

        node: true,

        jest: true,
    },

    plugins: ['prettier'],

    extends: ['airbnb-base', 'prettier'],

    globals: {
        Atomics: 'readonly',

        SharedArrayBuffer: 'readonly',
    },

    parserOptions: {
        ecmaVersion: 2018,

        sourceType: 'module',
    },

    rules: {
        'prettier/prettier': 'error',

        'class-methods-use-this': 'off',

        'no-param-reassign': 'off',

        'consistent-return': 'off',

        'no-console': 'off',

        camelcase: 'off',

        'no-unused-vars': 'off',

        'import/no-named-as-default': 'off',

        'no-shadow': 'off',

        'import/no-unresolved': 'off',

        'import/extensions': 'off',

        'no-proto': 'off',

        'array-callback-return': 'off',

        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
    },
};
