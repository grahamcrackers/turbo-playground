module.exports = {
    ...require('config/eslint-nest'),
    parserOptions: {
        root: true,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
};
