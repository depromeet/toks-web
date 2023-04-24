import { ChatPostMessageArguments, WebClient } from '@slack/web-api';

import { readSlackCredentials } from './credentials';

let api: WebClient;

function getSlackApi() {
  if (api == null) {
    const { token } = readSlackCredentials();

    api = new WebClient(token);
  }

  return api;
}

export async function sendSlackMessage(args: ChatPostMessageArguments) {
  const response = await getSlackApi().chat.postMessage(args);

  if (!response.ok) {
    throw new Error(response.error);
  }

  return response;
}
