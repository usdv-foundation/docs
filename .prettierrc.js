const config = {
    plugins: [require.resolve('prettier-plugin-packagejson'), require.resolve('prettier-plugin-sh')],
    overrides: [
        {
            files: '*.js',
            options: {
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'es5',
            },
        },
        {
            files: ['*.ts', '*.mts'],
            options: {
                printWidth: 120,
                semi: false,
                singleQuote: true,
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'es5',
            },
        },
        {
            files: '*.sh',
            options: {
                keepComments: true,
                keepPadding: true,
                indent: 4,
                minify: false,
                functionNextLine: false,
            },
        },
        {
            files: '*.json',
            options: {
                printWidth: 120,
                tabWidth: 2,
                useTabs: false,
            },
        },
    ],
};

module.exports = config;
