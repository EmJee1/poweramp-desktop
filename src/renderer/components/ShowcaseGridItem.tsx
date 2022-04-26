interface ShowcaseCarouselItemProps {
  img: string;
  title: string;
}

const ShowcaseGridItem = ({ img, title }: ShowcaseCarouselItemProps) => {
  return (
    <div className="aspect-square cursor-pointer rounded bg-slate-600/5 p-4 transition-transform hover:scale-105">
      <img src={img} alt="" className="mb-2 h-full rounded" />
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
        {title}
      </h6>
    </div>
  );
};

export default ShowcaseGridItem;
