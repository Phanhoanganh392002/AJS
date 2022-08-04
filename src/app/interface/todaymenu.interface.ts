export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface ITodaymenu{
  message: string;
  data: Datum[];
}
