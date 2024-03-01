import { Descendant } from "slate";

export type Card = {
  id: string;
  title: string;
  description: Descendant[];
  tags: string[];
  isFavorite?: boolean;
  isDeleted?: boolean;
};
