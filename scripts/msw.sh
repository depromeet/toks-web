#! /bin/bash

yarn add -D msw
npx msw init public/ --save

mkdir mocks
cd mocks
touch worker.ts
echo "import { setupServer } from 'msw/node';" >> worker.ts
echo "import { handlers } from './handlers';" >> worker.ts
echo "" >> worker.ts
echo "export const server = setupServer(...handlers);" >> worker.ts
echo "" >> worker.ts

touch handlers.ts
echo "import { rest } from 'msw';" >> handlers.ts
echo "" >> handlers.ts
