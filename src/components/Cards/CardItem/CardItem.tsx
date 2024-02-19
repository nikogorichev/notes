import { Card } from "utils/types/Card";
import styles from "./CardItem.module.scss";
import { tagsDict } from "utils/dict/TagsDict";
import Button from "shared/Button/Button";
import { ReactComponent as IconBasket } from "assets/images/iconBasket.svg";

type CardItemProps = {
  card: Card;
};

const CardItem = ({ card }: CardItemProps) => {
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
            <Button className={styles.button}>
            <IconBasket />
            </Button>
            <Button className={styles.button}>
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
