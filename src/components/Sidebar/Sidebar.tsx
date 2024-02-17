import SearchInput from "./SearchInput/SearchInput";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchInput />
    </div>
  );
};

export default Sidebar;
