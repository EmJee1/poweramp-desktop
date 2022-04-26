import { Link, To } from 'react-router-dom';

interface ShowcaseCarouselItemProps {
  img: string;
  title: string;
  to: To;
}

const ShowcaseGridItem = ({ img, title, to }: ShowcaseCarouselItemProps) => {
  return (
    <Link
      className="aspect-square cursor-pointer rounded bg-slate-600/5 p-4 transition-transform hover:scale-105"
      to={to}
    >
      <img src={img} alt="" className="mb-2 h-full rounded" />
      <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
        {title}
      </span>
    </Link>
  );
};

export default ShowcaseGridItem;
