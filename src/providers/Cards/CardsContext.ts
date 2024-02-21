import { createContext } from "react";
import { Card } from "utils/types/Card";
import { SelectedListType } from "utils/types/SelectedList";

type CardsContextType = {
  cards: Record<string, Card>;
  searchValue: string;
  selectedList: SelectedListType;

  setCards: (cards: Record<string, Card>) => void;
  setSearchValue: (value: string) => void;
  setSelectedList: (value: SelectedListType) => void;
};

export default createContext<CardsContextType>({
  cards: {},
  searchValue: "",
  setCards: (cards: Record<string, Card>) => {
    cards;
  },
  selectedList: "all",
  setSearchValue: (value: string) => value,
  setSelectedList: (value: SelectedListType) => value,
});
