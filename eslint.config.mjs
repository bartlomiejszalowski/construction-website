import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend your base configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add import sort rules via the simple-import-sort plugin
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // This rule will enforce import sorting
      "simple-import-sort/imports": "error",
      // This rule will enforce export sorting
      "simple-import-sort/exports": "error",
    },
  },
];

export default eslintConfig;
