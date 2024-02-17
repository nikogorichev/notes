import styles from "./AddButton.module.scss";
import { ReactComponent as IconAdd } from "assets/images/iconAdd.svg";

const AddButton = () => {
  
  return (
    <button className={styles.button}>
      <IconAdd />
    </button>
  );
};

export default AddButton;
