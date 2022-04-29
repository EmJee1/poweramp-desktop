import { Link, To } from 'react-router-dom';

interface ShowcaseListItemProps {
  title: string;
  to: To;
}

const ShowcaseListItem = ({ to, title }: ShowcaseListItemProps) => {
  return (
    <li>
      <Link to={to} type="button" className="flex items-center gap-4 font-bold">
        <img src="/" alt="" className="h-12 w-12" />
        {title}
      </Link>
    </li>
  );
};

export default ShowcaseListItem;
