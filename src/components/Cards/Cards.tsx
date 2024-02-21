import { useContext, useEffect, useState } from "react";
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
  const [currentCards, setCurrentCards] = useState<Record<string, Card>>({});
  const [filters, setFilters] = useState<string[]>([]);
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    // НУЖНО ЛИ ВЫНОСИТЬ В ОТДЕЛЬНУЮ ФУНКЦИЮ?
    const filteredObjectOfCard: Record<string, Card> = {};
    Object.entries(cards).forEach(([id, value]) => {
      switch (selectedList) {
        case "all":
          if (!value.isDeleted) {
            filteredObjectOfCard[id] = value;
          }
          break;
        case "deleted":
          if (value.isDeleted) {
            filteredObjectOfCard[id] = value;
          }
          break;
        case "favorites":
          if (value.isFavorite) {
            filteredObjectOfCard[id] = value;
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
          {Object.values(currentCards)
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
        <ModalWindow
          closeBtnFunc={() => setIsOpenWindow(false)}
          selectedCard=""
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Cards;
