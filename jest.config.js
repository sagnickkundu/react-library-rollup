module.exports = {
  roots: ['__tests__'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  cacheDirectory: './jest/cache',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@types)'],
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/jest/**'],
  coverageDirectory: './jest/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/jest/',
    '/build/',
    '/src/types/',
    '/src/utility',
    '/src/services',
  ],
  displayName: {
    name: 'EPSP',
    color: 'blue',
  },
  verbose: true,
};
