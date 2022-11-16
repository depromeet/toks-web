#! /bin/bash

yarn add -D msw
npx msw init mocks/ --save

cd mocks
touch worker.ts
echo "import { setupServer } from 'msw/node';" >> worker.ts
echo "import { handlers } from './handlers';" >> worker.ts
echo "" >> worker.ts
echo "export const server = setupServer(...handlers);" >> worker.ts

touch handlers.ts
echo "import { rest } from 'msw';" >> handlers.ts
echo "" >> handlers.ts
echo "export const handlers = [" >> handlers.ts
echo "    rest.get('', (req, res, ctx) => {" >> handlers.ts
echo "      return res(ctx.status(200), ctx.json({}));" >> handlers.ts
echo "    })," >> handlers.ts
echo "];" >> handlers.ts
