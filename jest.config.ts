const jestConfig = {
  silent: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: { '^.+\\.(t|j)sx?$': ['@swc/jest'] },
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: ["tests"],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};


export default jestConfig;
