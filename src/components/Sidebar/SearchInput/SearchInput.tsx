import { ChangeEvent, useContext } from "react";
import styles from "./SearchInput.module.scss";
import { ReactComponent as IconSearch } from "assets/images/iconSearch.svg";
import Input from "shared/Inputs/Input/Input";
import CardsContext from "providers/Cards/CardsContext";

const SearchInput = () => {
  const { searchValue, setSearchValue } = useContext(CardsContext);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <Input
        name="search"
        onChange={handleOnChange}
        value={searchValue}
        placeholder="Поиск"
      />
      <IconSearch className={styles.searchIcon} />
    </div>
  );
};

export default SearchInput;
