import { useState } from "react";
import CardsContext from "./CardsContext";
import { Card } from "utils/types/Card";
import { SelectedListType } from "utils/types/SelectedList";

type CardsProviderProps = {
  children: JSX.Element;
};

const CardsProvider = ({ children }: CardsProviderProps) => {
  const [cards, setCards] = useState<Record<string, Card>>({});
  const [deletedCards, setDeletedCards] = useState<string[]>([]);
  const [favoriteCards, setFavoriteCards] = useState<string[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedList, setSelectedList] = useState<SelectedListType>("all");

  return (
    <CardsContext.Provider
      value={{
        cards,
        deletedCards,
        favoriteCards,
        filters,
        searchValue,
        selectedList,
        setCards,
        setDeletedCards,
        setFavoriteCards,
        setFilters,
        setSearchValue,
        setSelectedList,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
