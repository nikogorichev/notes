import { createContext } from "react";
import { Card } from "utils/types/Card";
import { SelectedListType } from "utils/types/SelectedList";

type CardsContextType = {
  cards: Card[];
  searchValue: string;
  selectedList: SelectedListType;

  setCards: (cards: Card[]) => void;
  setSearchValue: (value: string) => void;
  setSelectedList: (value: SelectedListType) => void;
};

export default createContext<CardsContextType>({
  cards: [],
  searchValue: "",
  setCards: (cards: Card[]) => cards,
  selectedList: "all",
  setSearchValue: (value: string) => value,
  setSelectedList: (value: SelectedListType) => value,
});
