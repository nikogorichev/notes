import { useContext, useEffect, useMemo, useState } from "react";
import styles from "./Cards.module.scss";
import ModalWindow from "shared/ModalWindow/ModalWindow";
import CardsContext from "providers/Cards/CardsContext";
import CardItem from "./CardItem/CardItem";
import Button from "shared/Button/Button";
import { ReactComponent as IconAdd } from "assets/images/iconAdd.svg";
import { Card } from "utils/types/Card";
import TagList from "shared/TagList/TagList";

const Cards = () => {
  const { cards, selectedCategory, searchValue } = useContext(CardsContext);
  const [filters, setFilters] = useState<string[]>([]);
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(cards));
  }, [cards]); //useLocalStorage

  const filterByCategory = (card: Card) => {
    switch (selectedCategory) {
      case "all":
        if (!card.isDeleted) {
          return card;
        }
        break;
      case "deleted":
        if (card.isDeleted) {
          return card;
        }
        break;
      case "favorites":
        if (card.isFavorite) {
          return card;
        }
        break;
    }
  };

  const filterBySearch = (card: Card) => {
    if (card.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return card;
    }
  };

  const filterByTags = (card: Card) => {
    if (filters.length) {
      if (card.tags.some((tag) => filters.includes(tag))) {
        return card;
      }
    } else return card;
  };

  const filteredCards = useMemo(() => {
    return cards
      .filter(filterByCategory)
      .filter(filterBySearch)
      .filter(filterByTags);
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
