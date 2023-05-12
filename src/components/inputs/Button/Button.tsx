import { IButton } from './Button.interface';

const Button = ({ label, ...props }: IButton) => (
  <button className="btn primary" {...props}>
    {label}
  </button>
);

export { Button };
