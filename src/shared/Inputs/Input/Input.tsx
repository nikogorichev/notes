import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...otherProps }: InputProps) => {
  return (
    <input
      type="text"
      className={`${styles.input} ${className}`}
      {...otherProps}
    />
  );
};

export default Input;
