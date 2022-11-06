---
to: services/<%= name %>/tsconfig.json
---
{
  "extends": "../../tsconfig.service.json",
  "compilerOptions": {
    "baseUrl": "src",
    "incremental": true
  },
  "include": ["**/*.ts", "**/*.tsx", "next-env.d.ts"],
  "exclude": ["node_modules"],
}
