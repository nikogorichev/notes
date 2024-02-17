/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import AddButton from "./AddButton/AddButton";
import styles from "./Cards.module.scss";
import { Card } from "utils/types/Card";
import ModalWindow from "shared/ModalWindow/ModalWindow";

const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isOpenWindow, setIsOpenWindow] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <AddButton onClick={() => setIsOpenWindow(true)} />
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
