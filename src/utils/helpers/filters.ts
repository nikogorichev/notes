import { Card } from "utils/types/Card";
import { SelectedCategoryType } from "utils/types/SelectedCategory";

export const filterByCategory = (
  card: Card,
  selectedCategory: SelectedCategoryType
) => {
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

export const filterBySearch = (card: Card, searchValue: string) => {
  if (card.title.toLowerCase().includes(searchValue.toLowerCase())) {
    return card;
  }
};

export const filterByTags = (card: Card, filters: string[]) => {
  if (filters.length) {
    if (card.tags.some((tag) => filters.includes(tag))) {
      return card;
    }
  } else return card;
};
