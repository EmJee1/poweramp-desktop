interface ShowcaseCarouselProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const ShowcaseCarousel = ({ title, children }: ShowcaseCarouselProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="flex gap-6 overflow-x-auto">{children}</div>
    </div>
  );
};

export default ShowcaseCarousel;
