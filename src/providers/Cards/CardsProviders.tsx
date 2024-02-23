import { useState } from "react";
import CardsContext from "./CardsContext";
import { Card } from "utils/types/Card";
import { SelectedListType } from "utils/types/SelectedList";

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
  const [selectedList, setSelectedList] = useState<SelectedListType>("all");

  return (
    <CardsContext.Provider
      value={{
        cards,
        searchValue,
        selectedList,
        setCards,
        setSearchValue,
        setSelectedList,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
