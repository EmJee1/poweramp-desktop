import { Link, useNavigate, useLocation } from 'react-router-dom';
import ButtonRound from '../ButtonRound';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <ButtonRound onClick={() => navigate(-1)}>{`<`}</ButtonRound>
      <ButtonRound onClick={() => navigate(1)}>{`>`}</ButtonRound>
      <h2>PowerAMP</h2>
      {location.pathname !== '/settings' && (
        <Link to="/settings">Settings</Link>
      )}
    </div>
  );
};

export default Header;
