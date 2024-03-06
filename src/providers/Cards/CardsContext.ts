import { Dispatch, createContext } from "react";
import { Card } from "utils/types/Card";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

type CardsContextType = {
  cards: Card[];
  searchValue: string;
  selectedCategory: SelectedCategoryType;

  setCards: Dispatch<React.SetStateAction<Card[]>>;
  setSearchValue: Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: Dispatch<React.SetStateAction<SelectedCategoryType>>;
};

export default createContext<CardsContextType>({
  cards: [],
  searchValue: "",
  setCards: (value) => value,
  selectedCategory: "all",
  setSearchValue: (value) => value,
  setSelectedCategory: (value) => value,
});
