import { ReactComponent as IconBasket } from "assets/images/iconBasket.svg";
import { ReactComponent as IconFavorite } from "assets/images/iconFavorite.svg";
import { ReactComponent as IconAllList } from "assets/images/iconAllList.svg";
import { SelectedListType } from "utils/types/SelectedList";

export const listDict: Record<
  SelectedListType,
  { title: string; icon: JSX.Element }
> = {
  all: { title: "Весь список", icon: <IconAllList /> },
  favorites: { title: "Избранные", icon: <IconFavorite /> },
  deleted: { title: "Удаленные", icon: <IconBasket /> },
};

export const test = Object.entries<{ title: string; icon: JSX.Element }>(listDict)

// getEntries => замена Object.entries с корректной типизацией