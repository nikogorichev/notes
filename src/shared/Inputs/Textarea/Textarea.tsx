import {  TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className, ...otherProps }: TextareaProps) => {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      {...otherProps}
    />
  );
};

export default Textarea;
