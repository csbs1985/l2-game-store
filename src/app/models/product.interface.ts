import { IDimension } from "./dimension.interface";

export interface IProduct {
  id?: string;
  name: string;
  price: number;
  cover: string;
  description: string;
  dimension: IDimension;
}
