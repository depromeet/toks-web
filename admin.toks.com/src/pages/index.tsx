import { width100 } from '@toss/emotion-utils';

import SERVICE_MAP from '../../../serviceMap.json';
import ServiceList from './components/ServiceList';

//  Object.keys method가 타입을 string만 반환하여 커스텀
const getObjectKeys = <T,>(obj: T) => {
  return Object.keys(obj) as unknown as Array<keyof T>;
};

function App() {
  return (
    <>
      <Header />
      <ServiceList>
        {getObjectKeys(SERVICE_MAP).map(service => (
          <ServiceList.Row name={service} key={service} />
        ))}
      </ServiceList>
    </>
  );
}

function Header() {
  return (
    <header css={[width100, { position: 'sticky', textAlign: 'center', fontSize: '48px', fontWeight: '800' }]}>
      TOKS 배포 어드민
    </header>
  );
}

export default App;
