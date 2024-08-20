import { FormEvent } from "react";
import styles from "./TextInputField.module.scss";

export interface TextInputFieldProps {
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit: () => void;
}

function TextInputField({
  handleChange,
  value,
  onSubmit,
}: TextInputFieldProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.textInputField}
        type="text"
        size={30}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default TextInputField;
