import axios from 'axios';

import { ServiceName } from 'pages/models/service';

const API_HOST = 'http://3.90.189.11:8080';

export async function runDeploy({ name }: { name: ServiceName }) {
  return await axios.post(`${API_HOST}/deploy/${name}`, undefined, { onprogress: (_, event) => console.log(event) });
}

export async function getDeployStatus() {
  const { data } = await axios.get<{ status: 'enable' | 'inprogress' }>(`${API_HOST}/deploy/status`);
  return data;
}

getDeployStatus.queryKey = ['getDeployStatus'];
