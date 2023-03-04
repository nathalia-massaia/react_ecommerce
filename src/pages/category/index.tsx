import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import productMock from 'components/ui/ProductList/mock';

import * as S from './styles';
import ProductList from 'components/ui/ProductList';
import Base from 'templates/Base';
import { CardProductProps } from 'components/ui/CardProduct';

const Category = () => {
  const location = useLocation();
  const titlePath =
    location.pathname.split('/')[2].toLowerCase().charAt(0).toUpperCase() +
    location.pathname.split('/')[2].toLowerCase().slice(1);

  const [products, setProducts] = useState<CardProductProps[]>(productMock); //lista de produtos
  const [sortValue, setSortValue] = useState('priceAsc'); //valor do select

  const sortedProducts = (value: string) => {
    let sorted = [...products];
    switch (value) {
      case 'priceAsc':
        sorted.sort((a, b) => +a.description!.price - +b.description!.price);
        break;

      case 'priceDesc':
        sorted.sort((a, b) => +b.description!.price - +a.description!.price);
        break;

      case 'nameAsc':
        sorted.sort((a, b) =>
          a.description!.brand.localeCompare(b.description!.brand)
        );
        break;

      case 'nameDesc':
        sorted.sort((a, b) =>
          b.description!.brand.localeCompare(a.description!.brand)
        );
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
          <h2>
            <Link to={'/'}>Store</Link> / {titlePath.toUpperCase()}
          </h2>
          <h1>{titlePath.toUpperCase()}</h1>
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

      <ProductList
        items={products.filter((product) =>
          product.description?.category?.endsWith(titlePath)
        )}
      />
    </Base>
  );
};

export default Category;
