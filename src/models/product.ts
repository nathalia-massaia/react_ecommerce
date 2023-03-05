export type ProductProps = {
  id: number;
  slug: string;
  description: {
    title: string;
    brand: string;
    category: 'Men' | 'Ladies' | 'Headwear & Goods' | 'Hoodies';
    price: number;
  };
  image: string;
  isFeatured?: boolean;
};
