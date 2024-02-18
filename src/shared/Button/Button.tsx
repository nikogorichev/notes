import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: JSX.Element | string;
}

const Button = ({ className, children, ...otherProps }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
