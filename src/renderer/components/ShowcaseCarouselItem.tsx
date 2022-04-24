interface ShowcaseCarouselItemProps {
  img: string;
  title: string;
}

const ShowcaseCarouselItem = ({ img, title }: ShowcaseCarouselItemProps) => {
  return (
    <div className="min-w-32">
      <img src={img} alt="" className="h-32 w-32" />
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
        {title}
      </h6>
    </div>
  );
};

export default ShowcaseCarouselItem;
