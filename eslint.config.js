import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    ignores: ["node_modules", "dist", "vite.config.ts"], 
  },

  tseslint.configs.recommended,

  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", 
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",        
      "react/jsx-no-target-blank": "off",      
    },
  },
]);
