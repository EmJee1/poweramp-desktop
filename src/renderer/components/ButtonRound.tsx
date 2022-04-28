import { ComponentProps } from 'react';

interface ButtonRoundProps {
  icon(props: ComponentProps<'svg'>): JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  small?: boolean;
}

const ButtonRound = ({
  icon: Icon,
  disabled,
  onClick,
  small,
}: ButtonRoundProps) => {
  const classes = [];

  if (small) {
    classes.push('h-10', 'w-10');
  } else {
    classes.push('h-12', 'w-12');
  }

  return (
    <button
      type="button"
      className={`grid place-items-center rounded-full disabled:cursor-not-allowed ${classes.join(
        ' '
      )}`}
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
  small: false,
};

export default ButtonRound;
