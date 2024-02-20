import { useContext } from "react";
import styles from "./ListButton.module.scss";
import CardsContext from "providers/Cards/CardsContext";
import { SelectedListType } from "utils/types/SelectedList";

type ListButtonProps = {
  list: SelectedListType;
  content: { title: string; icon: JSX.Element };
};
const ListButton = ({ list, content }: ListButtonProps) => {
  const { selectedList, setSelectedList } = useContext(CardsContext);

  const isSelectedList = selectedList === list;
  return (
    <div className={styles.wrapper} onClick={() => setSelectedList(list)}>
      <div
        className={isSelectedList ? styles.flag_selected : styles.flag}
      ></div>
      <div className={isSelectedList ? styles.icon_selected : styles.icon}>
        {content.icon}
      </div>
      <div className={styles.title}>{content.title}</div>
    </div>
  );
};

export default ListButton;
