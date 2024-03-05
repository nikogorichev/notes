import { useContext } from "react";
import styles from "./ListButton.module.scss";
import CardsContext from "providers/Cards/CardsContext";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

type ListButtonProps = {
  list: SelectedCategoryType;
  content: { title: string; icon: JSX.Element };
};
const ListButton = ({ list, content }: ListButtonProps) => {
  const { selectedCategory, setSelectedCategory } = useContext(CardsContext);

  const isSelectedCategory = selectedCategory === list;
  return (
    <div className={styles.wrapper} onClick={() => setSelectedCategory(list)}>
      <div
        className={isSelectedCategory ? styles.flag_selected : styles.flag}
      ></div>
      <div className={isSelectedCategory ? styles.icon_selected : styles.icon}>
        {content.icon}
      </div>
      <div className={styles.title}>{content.title}</div>
    </div>
  );
};

export default ListButton;
