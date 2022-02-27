import { IProducts } from '../Interfaces.ts/IProducts';

export class Movie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  // added: string;
  // productCategory: [{ categoryId: number; category: null; }, { categoryId: number; category: null; }];
  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    year: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.year = year;
    // this.added
  }
}
