---
to: services/<%= name %>/tsconfig.vite.json
---
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["./vite.config.ts"]
}
