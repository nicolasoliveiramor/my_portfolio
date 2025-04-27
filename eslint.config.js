import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import React from "react";
import styled from "styled-components";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js, React, styled }, extends: ["react/recommended", "js/recommended", "styled/recommended"] },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);