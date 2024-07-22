import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  eslintPluginPrettierRecommended,
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
