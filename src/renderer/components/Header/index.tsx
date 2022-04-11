import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        Next
      </button>
      <h2>PowerAMP</h2>
      {location.pathname !== '/settings' && (
        <Link to="/settings">Settings</Link>
      )}
    </div>
  );
};

export default Header;
