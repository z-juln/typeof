/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./src/__test__/setupTests.ts"],
  coverageReporters: ["json-summary", "text", "lcov"],
};
