import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Base from 'templates/Base';
import List from 'components/ui/List';

import productMock from 'API/products.json';
import * as S from './styles';
import { ProductProps } from 'models/product';
import { formatSlug } from 'utils/formatSlug';

const Category = () => {
  const location = useLocation();
  const titlePath = decodeURIComponent(location.pathname.split('/')[1]);

  const [products, setProducts] = useState<ProductProps[]>(
    productMock as ProductProps[]
  );

  const [sortValue, setSortValue] = useState('priceAsc');

  const sortedProducts = (value: string) => {
    let sorted = [...products];
    switch (value) {
      case 'priceAsc':
        sorted.sort((a, b) => +a!.price - +b!.price);
        break;

      case 'priceDesc':
        sorted.sort((a, b) => +b!.price - +a!.price);
        break;

      case 'nameAsc':
        sorted.sort((a, b) => a!.brand.localeCompare(b!.brand));
        break;

      case 'nameDesc':
        sorted.sort((a, b) => b!.brand.localeCompare(a!.brand));
        break;

      default:
        break;
    }
    return sorted;
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.currentTarget.value);
  };

  useEffect(() => {
    const sorted = sortedProducts(sortValue);
    setProducts(sorted);
  }, [sortValue]);

  return (
    <Base>
      <S.Wrapper>
        <S.Title>
          <Link to={'/'}>Store</Link> / {formatSlug(titlePath)}
        </S.Title>
        <S.SelectWrapper>
          <p>SORT BY</p>
          <S.SelectContent onChange={(event) => handleChange(event)}>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
            <option value="nameDesc">Name: Z to A</option>
          </S.SelectContent>
        </S.SelectWrapper>
      </S.Wrapper>
      <List
        title={formatSlug(titlePath)}
        items={products.filter((product) =>
          product.category.includes(formatSlug(titlePath))
        )}
      />
    </Base>
  );
};

export default Category;
