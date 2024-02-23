import { ChangeEvent, useContext, useState } from "react";
import styles from "./ModalWindow.module.scss";
import { Card } from "utils/types/Card";
import { ReactComponent as IconClose } from "assets/images/iconClose.svg";
import Input from "shared/Inputs/Input/Input";
import Textarea from "shared/Inputs/Textarea/Textarea";
import TagList from "shared/TagList/TagList";
import Button from "shared/Button/Button";
import { tagsDict } from "utils/dict/TagsDict";
import CardsContext from "providers/Cards/CardsContext";

type ModalWindowProps = {
  closeBtnFunc: () => void;
  selectedCard?: Card;
};

const ModalWindow = ({ closeBtnFunc, selectedCard }: ModalWindowProps) => {
  const { cards, setCards } = useContext(CardsContext);

  const [values, setValues] = useState<Card>({
    // КАК ФОРМИРОВАТЬ ID
    id: selectedCard?.["id"] || new Date().toString().toString(),
    title: selectedCard?.["title"] || "",
    description: selectedCard?.["description"] || "",
    tags: selectedCard?.["tags"] || [],
  });

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddCard = () => {
    if (selectedCard) {
      const newValueCards = cards.map((element) =>
        element.id === values.id ? values : element
      );
      setCards(newValueCards);
    } else {
      setCards([...cards, values]);
    }

    closeBtnFunc();
  };

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.icon} onClick={closeBtnFunc}>
          <IconClose />
        </div>
        <div className={styles.selectedTags}>
          {values["tags"].length
            ? values["tags"].map((tag) => {
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
        <div className={styles.inputBlock}>
          <div className={styles.inputs}>
            <Input
              type="text"
              name="title"
              placeholder="Название"
              value={values["title"]}
              onChange={handleOnChange}
              className={styles.inputModal}
            />
            <Textarea
              name="description"
              placeholder="Описание"
              value={values["description"]}
              onChange={handleOnChange}
              className={styles.inputModal}
            />
            <TagList
              selectedFilter={values["tags"]}
              setSelectedFilter={(selectedTags) =>
                setValues({ ...values, tags: selectedTags })
              }
            />
          </div>
          <Button onClick={handleAddCard} disabled={!values["title"]}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
