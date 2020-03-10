module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "react-native",
  transformIgnorePatterns: ["node_modules/(?!(jest-)?react-native|react|react-navigation|@react-navigation/.*)"],
  collectCoverageFrom: ["app/**/*.{js,ts,tsx}", "!**/node_modules/**", "!**/vendor/**"]
};
