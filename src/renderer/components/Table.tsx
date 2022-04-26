interface TableProps {
  children: JSX.Element | JSX.Element[];
  headerItems?: string[];
}

const Table = ({ children, headerItems }: TableProps) => {
  return (
    <table className="w-full table-auto border-8">
      {headerItems && (
        <thead>
          <tr className="text-left">
            {headerItems.map((headerItem) => (
              <th key={headerItem}>{headerItem}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>{children}</tbody>
    </table>
  );
};

Table.defaultProps = {
  headerItems: undefined,
};

export default Table;
