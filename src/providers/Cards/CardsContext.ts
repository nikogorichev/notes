import { createContext } from "react";
import { Card } from "utils/types/Card";

type CardsContextType = {
  cards: Record<string, Card>;
  deletedCards: string[];
  favoriteCards: string[];
  filters: string[];
  searchValue: string;

  setCards: (cards: Record<string, Card>) => void;
  setDeletedCards: (value: string[]) => void;
  setFavoriteCards: (value: string[]) => void;
  setFilters: (value: string[]) => void;
  setSearchValue: (value: string) => void;
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
  setDeletedCards: (value: string[]) => [value],
  setFavoriteCards: (value: string[]) => [value],
  setFilters: (value: string[]) => [value],
  setSearchValue: (value: string) => value,
});
