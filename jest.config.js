/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.svg": "<rootDir>/tests/unit/__mocks__/svgMock.js",
  },

  clearMocks: true,
};
