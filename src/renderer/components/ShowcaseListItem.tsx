import { Link, To } from 'react-router-dom';

interface ShowcaseListItemProps {
  title: string;
  subtitle?: string;
  to: To;
}

const ShowcaseListItem = ({ to, subtitle, title }: ShowcaseListItemProps) => {
  return (
    <li>
      <Link to={to} type="button" className="flex items-center gap-4">
        <img src="/" alt="" className="h-12 w-12 rounded" />
        <div>
          <h5 className="font-bold">{title}</h5>
          {subtitle && <p className="text-sm font-light">{subtitle}</p>}
        </div>
      </Link>
    </li>
  );
};

ShowcaseListItem.defaultProps = {
  subtitle: undefined,
};

export default ShowcaseListItem;
