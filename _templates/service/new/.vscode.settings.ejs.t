---
to: services/<%= name %>/.vscode/settings.json
---
{
  "eslint.nodePath": "../../.yarn/sdks",
  "search.exclude": {
    "**/.yarn": true,
    "**/.pnp.*": true,
    ".next": true,
    "out": true
  },
  "prettier.prettierPath": "../../.yarn/sdks/prettier/index.js",
  "typescript.tsdk": "../../.yarn/sdks/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
