import { ChangeEvent, useContext, useState } from "react";
import styles from "./ModalWindow.module.scss";
import { Card } from "utils/types/Card";
import { ReactComponent as IconClose } from "assets/images/iconClose.svg";
import Input from "shared/Inputs/Input/Input";
import TagList from "shared/TagList/TagList";
import Button from "shared/Button/Button";
import { tagsDict } from "utils/dict/TagsDict";
import CardsContext from "providers/Cards/CardsContext";
import TextEditor from "../Inputs/TextEditor/TextEditor";
import { Descendant } from "slate";

type ModalWindowProps = {
  closeBtnFunc: () => void;
  selectedCard?: Card;
};

const ModalWindow = ({ closeBtnFunc, selectedCard }: ModalWindowProps) => {
  const { cards, setCards } = useContext(CardsContext);

  const [values, setValues] = useState<Card>({
    id: selectedCard?.["id"] || new Date().toString(),
    title: selectedCard?.["title"] || "",
    description: selectedCard?.["description"] || [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ],
    tags: selectedCard?.["tags"] || [],
  });

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnChangeDescription = (value: Descendant[]) => {
    setValues({ ...values, description: value });
  };

  const handleAddCard = () => {
    if (selectedCard) {
      setCards((prev) =>
        prev.map((element) =>
          element.id === values.id
            ? { ...values, id: new Date().toString() }
            : element
        )
      );
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
            <div>
              <Input
                type="text"
                name="title"
                placeholder="Название"
                value={values["title"]}
                onChange={handleOnChange}
                className={styles.inputModal}
              />
              <TextEditor
                value={values["description"]}
                setValue={handleOnChangeDescription}
              />
            </div>
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
