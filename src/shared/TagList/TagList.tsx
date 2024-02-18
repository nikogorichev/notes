import { tagsDict } from "utils/dict/TagsDict";
import styles from "./TagList.module.scss";

type TagListProps = {
  selectedFilter: string[];
  setSelectedFilter: (value: string[]) => void;
};
const TagList = ({ selectedFilter, setSelectedFilter }: TagListProps) => {
  const handleOnClick = (key: string) => {
    selectedFilter.includes(key)
      ? setSelectedFilter(selectedFilter.filter((filter) => filter !== key))
      : setSelectedFilter([...selectedFilter, key]);
  };
  return (
    <div className={styles.wrapper}>
      {Object.entries(tagsDict).map(([key, value]) => {
        return (
          <div
            key={key}
            onClick={() => handleOnClick(key)}
            className={`${styles.btn} ${styles[`btn_${value.color}`]} ${
              selectedFilter.includes(key) ? styles.btn_selected : ""
            }`}
          >
            {value.title}
          </div>
        );
      })}
    </div>
  );
};

export default TagList;
