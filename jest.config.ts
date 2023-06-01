export default {
  preset: 'ts-jest',
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
