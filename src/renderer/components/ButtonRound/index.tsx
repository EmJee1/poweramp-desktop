import { ComponentProps } from 'react';

interface ButtonRoundProps {
  icon(props: ComponentProps<'svg'>): JSX.Element;
  onClick?: () => void;
}

const ButtonRound = ({ icon: Icon, onClick }: ButtonRoundProps) => {
  return (
    <button
      type="button"
      className="w-12 h-12 rounded-full grid place-items-center"
      onClick={onClick}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

ButtonRound.defaultProps = {
  onClick: undefined,
};

export default ButtonRound;
