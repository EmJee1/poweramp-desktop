interface ButtonRoundProps {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
}

const ButtonRound = ({ children, onClick }: ButtonRoundProps) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

ButtonRound.defaultProps = {
  onClick: undefined,
};

export default ButtonRound;
