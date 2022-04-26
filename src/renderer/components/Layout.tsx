interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="mx-2">{children}</div>;
};

export default Layout;
