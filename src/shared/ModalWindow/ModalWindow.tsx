/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import styles from "./ModalWindow.module.scss";
import { Card } from "utils/types/Card";

type ModalWindowProps = {
  closeBtnFunc: () => void;
  selectedCard?: string;
};

const ModalWindow = ({ closeBtnFunc, selectedCard }: ModalWindowProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<Card["tags"]>([]);

  return (
    <div className={styles.container}>
        <div className={styles.window}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      </div>
    </div>
  );
};

export default ModalWindow;
