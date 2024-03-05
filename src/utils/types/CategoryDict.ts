import { SelectedCategoryType } from "./SelectedCategory";

export type CategoryDict = Record<
  SelectedCategoryType,
  { title: string; icon: JSX.Element }
>;
