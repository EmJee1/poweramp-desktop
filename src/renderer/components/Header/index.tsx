import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CogIcon,
} from '@heroicons/react/outline';
import ButtonRound from '../ButtonRound';
import HeaderSearchbar from '../HeaderSearchbar';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="m-2 flex">
      <div className="flex">
        <ButtonRound onClick={() => navigate(-1)} icon={ArrowLeftIcon} />
        <ButtonRound onClick={() => navigate(1)} icon={ArrowRightIcon} />
      </div>
      <HeaderSearchbar />
      {location.pathname !== '/settings' && (
        <ButtonRound onClick={() => navigate('/settings')} icon={CogIcon} />
      )}
    </div>
  );
};

export default Header;
