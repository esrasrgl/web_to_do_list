module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.css",
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"]
  };
  