interface ShowcaseCarouselProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const ShowcaseGrid = ({ title, children }: ShowcaseCarouselProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-6">
        {children}
      </div>
    </div>
  );
};

export default ShowcaseGrid;
