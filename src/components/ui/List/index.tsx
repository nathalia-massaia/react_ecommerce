import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from 'components/ui/ListItem';
import { ProductProps } from 'models/product';
import { CategoryProps } from 'models/category';
import * as S from './styles';

type ListProps = {
  title?: string;
  items: ProductProps[] | CategoryProps[];
};

const List = ({ title, items }: ListProps) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <S.ListWrapper>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default List;
