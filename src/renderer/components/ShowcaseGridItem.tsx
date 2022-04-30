import { Link, To } from 'react-router-dom';

interface ShowcaseCarouselItemProps {
  img: string;
  title: string;
  subtitle?: string;
  to: To;
}

const ShowcaseGridItem = ({
  img,
  title,
  subtitle,
  to,
}: ShowcaseCarouselItemProps) => {
  return (
    <Link
      className="aspect-square cursor-pointer rounded bg-slate-600/5 p-4 transition-transform hover:scale-105"
      to={to}
    >
      <img src={img} alt="" className="mb-2 h-full rounded" />
      <h5 className="block overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
        {title}
      </h5>
      {subtitle && (
        <p className="overflow-ellipsis whitespace-nowrap text-sm font-light">
          {subtitle}
        </p>
      )}
    </Link>
  );
};

ShowcaseGridItem.defaultProps = {
  subtitle: undefined,
};

export default ShowcaseGridItem;
