import { Card } from "utils/types/Card";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

export const filterByCategory = (selectedCategory: SelectedCategoryType) => {
  return (card: Card) => {
    switch (selectedCategory) {
      case "all":
        if (!card.isDeleted) {
          return card;
        }
        break;
      case "deleted":
        if (card.isDeleted) {
          return card;
        }
        break;
      case "favorites":
        if (card.isFavorite) {
          return card;
        }
        break;
    }
  };
};

export const filterBySearch = (searchValue: string) => {
  return (card: Card) => {
    if (card.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return card;
    }
  };
};

export const filterByTags = (filters: string[]) => {
  return (card: Card) => {
    if (filters.length) {
      if (card.tags.some((tag) => filters.includes(tag))) {
        return card;
      }
    } else return card;
  };
};
