module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/coverage/**', '!jest.config.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  setupFilesAfterEnv: ['<rootDir>/enzyme.setup.ts'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', '/coverage/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
