import { IDimension } from "./dimension.interface";

export interface IGame {
  name: string,
  price: string,
  cover: string,
  descrition: string,
  dimension: IDimension
}
