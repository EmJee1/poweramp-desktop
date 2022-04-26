import { Link as RouterLink, To } from 'react-router-dom';

interface LinkProps {
  children: JSX.Element | JSX.Element[] | string;
  small?: boolean;
  to: To;
}

const Link = ({ to, small, children }: LinkProps) => {
  const classes = ['hover:underline'];

  if (small) {
    classes.push('text-sm', 'text-slate-800');
  }

  return (
    <RouterLink to={to} className={classes.join(' ')}>
      {children}
    </RouterLink>
  );
};

Link.defaultProps = {
  small: false,
};

export default Link;
