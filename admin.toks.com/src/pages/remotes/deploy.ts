import axios from 'axios';

import { ServiceName } from 'pages/models/service';

const API_HOST = 'http://3.90.189.11:8080';

export async function runDeploy({ name }: { name: ServiceName }) {
  return await axios.get(`${API_HOST}/deploy/${name}`);
}
