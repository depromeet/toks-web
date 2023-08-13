import { BackHeader } from './components/BackHeader';
import { LogoutBar } from './components/LogoutBar';
import { UserInfo } from './components/UserInfo';

const MyPage = () => {
  return (
    <div>
      <BackHeader />
      <UserInfo />
      <LogoutBar />
    </div>
  );
};

export default MyPage;
