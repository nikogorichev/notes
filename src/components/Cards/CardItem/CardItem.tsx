import { Card } from "utils/types/Card";
import styles from "./CardItem.module.scss";
import { tagsDict } from "utils/dict/TagsDict";
import Button from "shared/Button/Button";
import { ReactComponent as IconBasket } from "assets/images/iconBasket.svg";
import { useContext } from "react";
import CardsContext from "providers/Cards/CardsContext";

type CardItemProps = {
  card: Card;
};

const CardItem = ({ card }: CardItemProps) => {
  const {
    favoriteCards,
    deletedCards,
    cards,
    setFavoriteCards,
    setDeletedCards,
    setCards,
  } = useContext(CardsContext);

  const handleSetFavoriteCards = () => {
    favoriteCards.includes(card.id)
      ? setFavoriteCards(
          [...favoriteCards].filter((favorite) => favorite !== card.id)
        )
      : setFavoriteCards([...favoriteCards, card.id]);
  };

  const handleDeleteCards = () => {
    if (!deletedCards.includes(card.id)) {
      setDeletedCards([...deletedCards, card.id]);
    } else {
      setDeletedCards(
        [...deletedCards].filter((deleted) => deleted !== card.id)
      );
      const newCardList: Record<string, Card> = {};
      Object.keys(cards).forEach((key) => {
        if (key !== card.id) {
          newCardList[key] = cards[key];
        }
      });
      setCards(newCardList);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tagsList}>
        {card["tags"].length
          ? card["tags"].map((tag) => {
              return (
                <div
                  key={tag}
                  className={`${styles.tag} ${
                    styles[`tag_${tagsDict[tag]["color"]}`]
                  }`}
                ></div>
              );
            })
          : ""}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>{card.title}</p>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={handleSetFavoriteCards}>
              <IconBasket />
            </Button>
            <Button className={styles.button} onClick={handleDeleteCards}>
              <IconBasket />
            </Button>
          </div>
        </div>
        <div className={styles.description}>{card.description}</div>
      </div>
    </div>
  );
};

export default CardItem;
