export type Card = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isFavorite?: boolean;
  isDeleted?: boolean;
};
