import { Card } from "utils/types/Card";
import styles from "./CardItem.module.scss";
import { tagsDict } from "utils/dict/TagsDict";
import Button from "shared/Button/Button";
import { ReactComponent as IconBasket } from "assets/images/iconBasket.svg";
import { ReactComponent as IconFavorite } from "assets/images/iconFavorite.svg";
import { ReactComponent as IconEdit } from "assets/images/iconEdit.svg";
import { useCallback, useContext, useMemo, useState } from "react";
import CardsContext from "providers/Cards/CardsContext";
import ModalWindow from "shared/ModalWindow/ModalWindow";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";
import { withHistory } from "slate-history";
import { createEditor } from "slate";
import { Element, Leaf } from "utils/slateEditor/toolbarElements";

type CardItemProps = {
  card: Card;
};

const CardItem = ({ card }: CardItemProps) => {
  const { cards, setCards } = useContext(CardsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const handleSetFavoriteCards = () => {
    const selectedCard = Object.assign({}, card);
    selectedCard.isFavorite = !card.isFavorite;
    setCards((prev) =>
      prev.map((element) => {
        return element.id === selectedCard.id
          ? { ...card, isFavorite: selectedCard.isFavorite }
          : element;
      })
    );
  };

  const handleDeleteCards = () => {
    if (!card.isDeleted) {
      setCards((prev) =>
        prev.map((element) =>
          element.id === card.id
            ? { ...card, isFavorite: false, isDeleted: true }
            : element
        )
      );
    } else {
      setCards(cards.filter((element) => element.id !== card.id));
    }
  };

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    [card.description]
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    [card.description]
  );

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
          {/* <div className={styles.description}>{card.description}</div> */}
          <Slate editor={editor} initialValue={card.description}>
            <Editable
              className={styles.container}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              readOnly
            />
          </Slate>
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
