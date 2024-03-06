import { useState } from "react";
import CardsContext from "./CardsContext";
import { SelectedCategoryType } from "utils/types/SelectedCategory";
import { useLocalStorage } from "utils/hooks/useLocalStorage";

type CardsProviderProps = {
  children: JSX.Element;
};

const CardsProvider = ({ children }: CardsProviderProps) => {
  const [cards, setCards] = useLocalStorage("cards");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategoryType>("all");

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
