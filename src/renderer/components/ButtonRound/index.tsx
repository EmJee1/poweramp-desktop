import { ComponentProps } from 'react';

interface ButtonRoundProps {
  icon(props: ComponentProps<'svg'>): JSX.Element;
  onClick?: () => void;
}

const ButtonRound = ({ icon: Icon, onClick }: ButtonRoundProps) => {
  return (
    <button
      type="button"
      className="grid h-12 w-12 place-items-center rounded-full"
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
};

ButtonRound.defaultProps = {
  onClick: undefined,
};

export default ButtonRound;
