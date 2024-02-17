import styles from "./AddButton.module.scss";
import { ReactComponent as IconAdd } from "assets/images/iconAdd.svg";

type AddButton = {
  onClick: () => void;
};

const AddButton = ({ onClick }: AddButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <IconAdd />
    </button>
  );
};

export default AddButton;
