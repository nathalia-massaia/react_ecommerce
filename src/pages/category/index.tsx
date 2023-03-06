import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Base from 'templates/Base';
import List from 'components/ui/List';
import Breadcrumb from 'components/structure/Breadcrumb';
import { ProductProps } from 'models/product';
import { formatSlug } from 'utils/formatSlug';
import productMock from 'API/products.json';

const CategoryPage = () => {
  const location = useLocation();
  const titlePath = decodeURIComponent(location.pathname.split('/')[1]);

  const [products, setProducts] = useState<ProductProps[]>(
    productMock as ProductProps[]
  );

  const sortOptions = [
    { value: 'nameAsc', label: 'Name: A to Z' },
    { value: 'nameDesc', label: 'Name: Z to A' },
    { value: 'priceAsc', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' }
  ];

  const handleSortItems = (value: string) => {
    const sorted = [...products];

    switch (value) {
      case 'nameAsc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case 'nameDesc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case 'priceAsc':
        sorted.sort((a, b) => a.price - b.price);
        break;

      case 'priceDesc':
        sorted.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setProducts(sorted);
  };

  return (
    <Base>
      <Breadcrumb />

      <List
        title={formatSlug(titlePath)}
        items={products.filter((product) =>
          product.category.includes(formatSlug(titlePath))
        )}
        sortable
        sortOptions={sortOptions}
        onSort={handleSortItems}
      />
    </Base>
  );
};

export default CategoryPage;
