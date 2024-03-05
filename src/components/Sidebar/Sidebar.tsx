import { categoryDictEntries } from "utils/dict/CategoryDict";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./Sidebar.module.scss";
import ListButton from "./ListButton/ListButton";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchInput />
      <div className={styles.container}>
        {categoryDictEntries.map(([list, content]) => {
          return <ListButton key={list} list={list} content={content} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
