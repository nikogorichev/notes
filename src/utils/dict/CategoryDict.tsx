import { ReactComponent as IconBasket } from "assets/images/iconBasket.svg";
import { ReactComponent as IconFavorite } from "assets/images/iconFavorite.svg";
import { ReactComponent as IconAllList } from "assets/images/iconAllList.svg";
import { SelectedCategoryType } from "utils/types/SelectedCategory";
import { getEntries } from "utils/helpers/getEntries";

type CategoryDict = Record<
  SelectedCategoryType,
  { title: string; icon: JSX.Element }
>;

const categoryDict: CategoryDict = {
  all: { title: "Весь список", icon: <IconAllList /> },
  favorites: { title: "Избранные", icon: <IconFavorite /> },
  deleted: { title: "Удаленные", icon: <IconBasket /> },
};

export const categoryDictEntries = getEntries(categoryDict);
