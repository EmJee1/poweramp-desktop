import { ComponentProps } from 'react';

interface ButtonRoundProps {
  icon(props: ComponentProps<'svg'>): JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonRound = ({ icon: Icon, disabled, onClick }: ButtonRoundProps) => {
  return (
    <button
      type="button"
      className="grid h-12 w-12 place-items-center rounded-full disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
};

ButtonRound.defaultProps = {
  onClick: undefined,
  disabled: false,
};

export default ButtonRound;
