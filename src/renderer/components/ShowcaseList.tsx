interface ShowcaseListProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const ShowcaseList = ({ title, children }: ShowcaseListProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default ShowcaseList;
