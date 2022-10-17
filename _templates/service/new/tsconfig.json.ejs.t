---
to: services/<%= name %>/tsconfig.json
---
{
  "extends": "../../tsconfig.service.json",
  "compilerOptions": {
    "baseUrl": "src",
    "incremental": true
  },
  "include": ["**/*.ts", "**/*.tsx", "vite.config.js"],
  "exclude": ["node_modules"],
  "references": [{ "path": "./tsconfig.vite.json" }]
}
