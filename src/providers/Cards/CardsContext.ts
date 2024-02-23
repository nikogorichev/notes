import { createContext } from "react";
import { Card } from "utils/types/Card";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

type CardsContextType = {
  cards: Card[];
  searchValue: string;
  selectedCategory: SelectedCategoryType;

  setCards: (cards: Card[]) => void;
  setSearchValue: (value: string) => void;
  setSelectedCategory: (value: SelectedCategoryType) => void;
};

export default createContext<CardsContextType>({
  cards: [],
  searchValue: "",
  setCards: (cards: Card[]) => cards,
  selectedCategory: "all",
  setSearchValue: (value: string) => value,
  setSelectedCategory: (value: SelectedCategoryType) => value,
});
