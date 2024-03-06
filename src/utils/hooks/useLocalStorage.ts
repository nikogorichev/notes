import { useEffect, useState } from "react";
import { Card } from "utils/types/Card";

export const useLocalStorage = (key: string) => {
  const [cards, setCards] = useState<Card[]>(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || "") : []
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cards));
  }, [cards]);

  return [cards, setCards] as const;
};
