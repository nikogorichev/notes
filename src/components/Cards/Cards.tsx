/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useMemo, useState } from "react";
import styles from "./Cards.module.scss";
import ModalWindow from "shared/ModalWindow/ModalWindow";
import CardsContext from "providers/Cards/CardsContext";
import CardItem from "./CardItem/CardItem";
import Button from "shared/Button/Button";
import { ReactComponent as IconAdd } from "assets/images/iconAdd.svg";
import { Card } from "utils/types/Card";
import TagList from "shared/TagList/TagList";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

const Cards = () => {
  const { cards, selectedCategory, searchValue } = useContext(CardsContext);
  const [currentCards, setCurrentCards] = useState<Card[]>([]);
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
    } else {
      return
    }
  };

  const filteredCards = useMemo(() => {
    return cards.filter(filterByCategory).filter(filterBySearch);
  }, [cards, selectedCategory]);

  //   // eslint-disable-next-line no-console
  //  console.log(filteredCards);

  // useEffect(() => {
  //   // НУЖНО ЛИ ВЫНОСИТЬ В ОТДЕЛЬНУЮ ФУНКЦИЮ? Да
  //   const filteredObjectOfCard: Card[] = [];
  //   cards.forEach((value) => {
  //     switch (selectedCategory) {
  //       case "all":
  //         if (!value.isDeleted) {
  //           filteredObjectOfCard.push(value);
  //         }
  //         break;
  //       case "deleted":
  //         if (value.isDeleted) {
  //           filteredObjectOfCard.push(value);
  //         }
  //         break;
  //       case "favorites":
  //         if (value.isFavorite) {
  //           filteredObjectOfCard.push(value);
  //         }
  //         break;
  //     }
  //   });
  //   setCurrentCards(filteredObjectOfCard);
  // }, [selectedCategory, cards]);

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
