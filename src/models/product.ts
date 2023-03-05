export type ProductProps = {
  id: number;
  slug: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  isFeatured?: boolean;
};
