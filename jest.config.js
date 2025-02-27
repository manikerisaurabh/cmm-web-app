module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};