import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, children, ...otherProps }) => {
  return (
    <button className={`${styles.button} ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
