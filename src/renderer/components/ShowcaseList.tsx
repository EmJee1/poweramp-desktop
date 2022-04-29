interface ShowcaseListProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const ShowcaseList = ({ title, children }: ShowcaseListProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul className="flex flex-col gap-4">{children}</ul>
    </div>
  );
};

export default ShowcaseList;
