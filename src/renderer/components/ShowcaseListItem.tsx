import { Link, To } from 'react-router-dom';

interface ShowcaseListItemProps {
  title: string;
  subtitle?: string;
  img?: string;
  to: To;
}

const ShowcaseListItem = ({
  to,
  subtitle,
  img,
  title,
}: ShowcaseListItemProps) => {
  return (
    <li>
      <Link to={to} type="button" className="flex items-center gap-4">
        <img src={img} alt="" className="h-14 w-14 rounded" />
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
  img: undefined,
};

export default ShowcaseListItem;
