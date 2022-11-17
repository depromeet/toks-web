#! /bin/bash

yarn add -D msw
npx msw init mocks/ --save

cp ../../_templates/msw/handlers.ts ../../_templates/msw/worker.ts ./mocks
