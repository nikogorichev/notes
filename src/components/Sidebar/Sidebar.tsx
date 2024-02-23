import { categoryDict } from "utils/dict/CategoryDict";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./Sidebar.module.scss";
import ListButton from "./ListButton/ListButton";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchInput />
      <div className={styles.container}>
        {Object.entries(categoryDict).map(([list, content]) => {
          return (
            <ListButton
              key={list}
              // НЕПОНЯТНО КАК БЫТЬ
              list={list as SelectedCategoryType}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
