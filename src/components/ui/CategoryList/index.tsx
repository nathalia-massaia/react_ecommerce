import React from 'react';
import { Link } from 'react-router-dom';
import CardProducts from 'components/ui/CardProduct';

import * as S from './styles';

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      title: 'Men',
      image: '/img/Skull.jpeg'
    },
    {
      id: 2,
      title: 'Ladies',
      image: '/img/Skull.jpeg'
    },
    {
      id: 3,
      title: 'Headwear & Goods',
      image: '/img/Skull.jpeg'
    },
    {
      id: 4,
      title: 'Hoodies',
      image: '/img/Skull.jpeg'
    }
  ];
  return (
    <S.Wrapper>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.title.toLowerCase()}`}
        >
          <CardProducts {...category} />
        </Link>
      ))}
    </S.Wrapper>
  );
};

export default CategoryList;
