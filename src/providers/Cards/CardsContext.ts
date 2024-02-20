import { createContext } from "react";
import { Card } from "utils/types/Card";
import { SelectedListType } from "utils/types/SelectedList";



type CardsContextType = {
  cards: Record<string, Card>;
  deletedCards: string[];
  favoriteCards: string[];
  filters: string[];
  searchValue: string;
  selectedList: SelectedListType;

  setCards: (cards: Record<string, Card>) => void;
  setDeletedCards: (value: string[]) => void;
  setFavoriteCards: (value: string[]) => void;
  setFilters: (value: string[]) => void;
  setSearchValue: (value: string) => void;
  setSelectedList: (value: SelectedListType) => void;
};

export default createContext<CardsContextType>({
  cards: {},
  deletedCards: [],
  favoriteCards: [],
  filters: [],
  searchValue: "",
  setCards: (cards: Record<string, Card>) => {
    cards;
  },
  selectedList: "all",
  setDeletedCards: (value: string[]) => [value],
  setFavoriteCards: (value: string[]) => [value],
  setFilters: (value: string[]) => [value],
  setSearchValue: (value: string) => value,
  setSelectedList: (value: SelectedListType) => value
});
