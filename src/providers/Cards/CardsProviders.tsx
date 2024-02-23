import { useState } from "react";
import CardsContext from "./CardsContext";
import { Card } from "utils/types/Card";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

type CardsProviderProps = {
  children: JSX.Element;
};

const CardsProvider = ({ children }: CardsProviderProps) => {
  const [cards, setCards] = useState<Card[]>(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes") || "")
      : []
  );
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryType>("all");

  return (
    <CardsContext.Provider
      value={{
        cards,
        searchValue,
        selectedCategory,
        setCards,
        setSearchValue,
        setSelectedCategory,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
