import { CategoryDict } from "utils/types/CategoryDict";

type Keys<T> = Array<keyof T>;

export const getKeys = <T extends CategoryDict>(obj: T): Keys<T> =>
  Object.keys(obj) as Keys<T>;
