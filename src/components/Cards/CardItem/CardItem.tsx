import { Card } from "utils/types/Card";
import styles from "./CardItem.module.scss";
import { tagsDict } from "utils/dict/TagsDict";
import Button from "shared/Button/Button";
import { ReactComponent as IconBasket } from "assets/images/iconBasket.svg";
import { ReactComponent as IconFavorite } from "assets/images/iconFavorite.svg";
import { ReactComponent as IconEdit } from "assets/images/iconEdit.svg";
import { useContext, useState } from "react";
import CardsContext from "providers/Cards/CardsContext";
import ModalWindow from "shared/ModalWindow/ModalWindow";

type CardItemProps = {
  card: Card;
};

const CardItem = ({ card }: CardItemProps) => {
  const {
    cards,
    setCards,
  } = useContext(CardsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetFavoriteCards = () => {
    const selectedCard = Object.assign({}, card);
 
    selectedCard.isFavorite = !card.isFavorite;
    const newValueCards = cards.map((element) => {
      
      return element.id === selectedCard.id
        ? { ...card, isFavorite: selectedCard.isFavorite }
        : element;
    });
    setCards(newValueCards);
  };

  const handleDeleteCards = () => {
    if (!card.isDeleted) {
      const newValueCards = cards.map((element) =>
        element.id === card.id
          ? { ...card, isFavorite: false, isDeleted: true }
          : element
      );
      setCards(newValueCards);
    } else {
      setCards(cards.filter((element) => element.id !== card.id));
    }
  };

  return (
    <>
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
              {!card.isDeleted ? (
                <>
                  <Button
                    className={styles.button}
                    onClick={handleSetFavoriteCards}
                  >
                    <IconFavorite
                      className={
                        card.isFavorite ? styles.selectedAsFavorite : ""
                      }
                    />
                  </Button>
                  <Button
                    className={styles.button}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <IconEdit />
                  </Button>
                </>
              ) : (
                ""
              )}

              <Button className={styles.button} onClick={handleDeleteCards}>
                <IconBasket />
              </Button>
            </div>
          </div>
          <div className={styles.description}>{card.description}</div>
        </div>
      </div>
      {isModalOpen ? (
        <ModalWindow
          closeBtnFunc={() => setIsModalOpen(false)}
          selectedCard={card}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CardItem;
