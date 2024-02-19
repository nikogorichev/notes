import { ChangeEvent, useContext, useId, useState } from "react";
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
  selectedCard: string;
};

const ModalWindow = ({ closeBtnFunc, selectedCard }: ModalWindowProps) => {
  const { cards, setCards } = useContext(CardsContext);
  const id = useId();
  // eslint-disable-next-line no-console
  console.log(id)
  const [values, setValues] = useState<Card>({
    id: cards[selectedCard]?.["id"] || id,
    title: cards[selectedCard]?.["title"] || "",
    description: cards[selectedCard]?.["description"] || "",
    tags: cards[selectedCard]?.["tags"] || [],
  });

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddCard = () => {
    setCards({ ...cards, [id]: values });
    closeBtnFunc()
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
          <Button onClick={handleAddCard}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
