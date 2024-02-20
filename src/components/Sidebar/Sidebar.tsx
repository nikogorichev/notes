import { listDict } from "utils/dict/ListDict";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./Sidebar.module.scss";
import ListButton from "./ListButton/ListButton";
import { SelectedListType } from "utils/types/SelectedList";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchInput />
      <div className={styles.container}>
        {Object.entries(listDict).map(([list, content]) => {
          return (
            <ListButton
              key={list}
              // НЕПОНЯТНО КАК БЫТЬ
              list={list as SelectedListType}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
