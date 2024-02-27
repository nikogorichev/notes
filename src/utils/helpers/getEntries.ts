import { CategoryDict } from "utils/types/CategoryDict";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends CategoryDict>(obj: T) =>
  Object.entries(obj) as Entries<T>;
