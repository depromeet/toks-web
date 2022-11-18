#! /bin/bash

yarn add -D msw
npx msw init mocks/ --save

cp ../../_templates/service/msw/handlers.ts ../../_templates/service/msw/worker.ts ./mocks
