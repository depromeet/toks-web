import { BackHeader } from './components/BackHeader';
import { LogoutBar } from './components/LogoutBar';
import { UserInfo } from './components/UserInfo';

const MyPage = () => {
  return (
    <div>
      <BackHeader />
      <LogoutBar />
      <UserInfo />
    </div>
  );
};

export default MyPage;
