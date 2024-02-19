import { useContext, useState } from "react";
import styles from "./Cards.module.scss";
import ModalWindow from "shared/ModalWindow/ModalWindow";
import CardsContext from "providers/Cards/CardsContext";
import CardItem from "./CardItem/CardItem";
import Button from "shared/Button/Button";
import { ReactComponent as IconAdd } from "assets/images/iconAdd.svg";

const Cards = () => {
  const { cards } = useContext(CardsContext);
  const [isOpenWindow, setIsOpenWindow] = useState(false);

  // eslint-disable-next-line no-console
  console.log(cards);

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
        </div>
        <div className={styles.cardList}>
          {Object.values(cards).map((card) => {
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
