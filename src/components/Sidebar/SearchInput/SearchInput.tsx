import { ChangeEvent, useState } from "react";
import styles from "./SearchInput.module.scss";
import { ReactComponent as IconSearch } from "assets/images/iconSearch.svg";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        name="search"
        className={styles.input}
        value={searchValue}
        onChange={handleOnChange}
        placeholder="Поиск"
      />
      <IconSearch className={styles.searchIcon} />
    </div>
  );
};

export default SearchInput;
