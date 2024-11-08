import globals from "globals";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  parser: tsParser,
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    node: true,
    es2021: true,
    ...globals.node,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
