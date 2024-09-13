module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!react-native||@shoutem)",
    "jest-runner",
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  setupFilesAfterEnv: ['./__config__/setupTest.ts'], // Adjust if you have a setup file
};
