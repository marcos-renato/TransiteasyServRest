module.exports = {
    // O módulo que transforma código ES6/JSX em código compatível com o Node.js
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },

    // Diretórios que o Jest deve ignorar durante a execução dos testes
    modulePathIgnorePatterns: ['<rootDir>/node_modules'],

    // Pastas onde os testes estão localizados
    testMatch: ['<rootDir>/test/**/*.test.js'],

    // Setup global para seus testes, se necessário
    setupFiles: ['<rootDir>/test/setup.js'],

    setupFilesAfterEnv: ['./test/setup.js'],
};