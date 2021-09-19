module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2020,
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    'node': true
  },
  rules: {
    // fix: `Import and export declarations are not supported yet. eslint(node/no-unsupported-features/es-syntax)`
    // ref: https://dev.to/michalbryxi/import-and-export-declarations-are-not-supported-yet-in-ts-fo7
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    "node/no-missing-import": [
      "error",
      {
        "allowModules": [],
        "resolvePaths": ["./"],
        "tryExtensions": [".ts", ".js"]
      }
    ],
    "import/order": [2, { "alphabetize": { "order": "asc" }}],
    "quotes": [2, "double"]
  },
};
