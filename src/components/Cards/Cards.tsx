import { useContext, useMemo, useState } from "react";
import styles from "./Cards.module.scss";
import ModalWindow from "shared/ModalWindow/ModalWindow";
import CardsContext from "providers/Cards/CardsContext";
import CardItem from "./CardItem/CardItem";
import Button from "shared/Button/Button";
import { ReactComponent as IconAdd } from "assets/images/iconAdd.svg";
import TagList from "shared/TagList/TagList";
import {
  filterByCategory,
  filterBySearch,
  filterByTags,
} from "utils/helpers/filters";

const Cards = () => {
  const { cards, selectedCategory, searchValue } = useContext(CardsContext);
  const [filters, setFilters] = useState<string[]>([]);
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  const filteredCards = useMemo(() => {
    return cards
      .filter((card) => filterByCategory(card, selectedCategory))
      .filter((card) => filterBySearch(card, searchValue))
      .filter((card) => filterByTags(card, filters));
  }, [cards, selectedCategory, searchValue, filters]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Button
            className={styles.button}
            onClick={() => setIsOpenWindow(true)}
          >
            <IconAdd />
          </Button>
          <TagList
            selectedFilter={filters}
            setSelectedFilter={(selectedTags) => setFilters(selectedTags)}
          />
        </div>
        <div className={styles.cardList}>
          {filteredCards.map((card) => {
            return <CardItem key={card.id} card={card} />;
          })}
        </div>
      </div>
      {isOpenWindow ? (
        <ModalWindow closeBtnFunc={() => setIsOpenWindow(false)} />
      ) : (
        ""
      )}
    </>
  );
};

export default Cards;
