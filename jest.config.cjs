module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/src/tests/**/*.test.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom', 
};