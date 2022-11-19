import { Command, Option } from 'clipanion';
import { ROOT_DIR } from '../constants';
import fs from 'fs';

export class NewService extends Command {
  static paths = [['new-service']];

  readonly service = Option.String('--service', {
    required: true,
    description: '새로운 서비스 이름',
  });

  async execute() {
    const SERVICE_MAP: { [key: string]: { port: number } } = require(`${ROOT_DIR}/serviceMap.json`);
    const serviceMapEntires = Object.entries(SERVICE_MAP);
    let maxPortNum = 0;

    serviceMapEntires.forEach(([, { port }]) => {
      maxPortNum = maxPortNum < port ? port : maxPortNum;
    });

    if (SERVICE_MAP[this.service] == null) {
      SERVICE_MAP[this.service] = { port: maxPortNum + 1 };
    }

    fs.writeFileSync(`${ROOT_DIR}/serviceMap.json`, JSON.stringify(SERVICE_MAP));

    // TODO: nginx port forwarding 설정

    return;
  }
}
