export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: string;
  productCategory: [
    { categoryId: number; category: null },
    { categoryId: number; category: null }
  ];
}
