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

const Cards = () => {
  const { cards, selectedList, searchValue } = useContext(CardsContext);
  const [currentCards, setCurrentCards] = useState<Card[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(cards));
  }, [cards]); //useLocalStorage

  //   const filteredNotes = useMemo(() => {
  //     const notes: Record<string, Card> = {}

  //     // return notes
  //     //     .filter(filterByTags)
  //     //     .filter(filterBySearch)
  //     //     .filter(filterByCategory);
  // }, [selectedList, cards]);

  useEffect(() => {
    // НУЖНО ЛИ ВЫНОСИТЬ В ОТДЕЛЬНУЮ ФУНКЦИЮ? Да
    const filteredObjectOfCard: Card[] = [];
    cards.forEach((value) => {
      switch (selectedList) {
        case "all":
          if (!value.isDeleted) {
            filteredObjectOfCard.push(value);
          }
          break;
        case "deleted":
          if (value.isDeleted) {
            filteredObjectOfCard.push(value);
          }
          break;
        case "favorites":
          if (value.isFavorite) {
            filteredObjectOfCard.push(value);
          }
          break;
      }
    });
    setCurrentCards(filteredObjectOfCard);
  }, [selectedList, cards]);

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
          {currentCards
            .filter(
              (card) =>
                card.title.toLowerCase().includes(searchValue.toLowerCase()) &&
                (filters.length
                  ? card.tags.some((tag) => filters.includes(tag))
                  : true)
            )
            .map((card) => {
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
