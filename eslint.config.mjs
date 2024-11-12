import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Include Node.js globals
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser, // Include browser globals
    },
  },
  pluginJs.configs.recommended,
];
