import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from 'components/ui/ListItem';
import * as S from './styles';

type ListProps = {
  title: string;
  items: any[];
};

const List = ({ title, items }: ListProps) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <S.ListWrapper>
        {items.map((item) => (
          <Link key={item.id} to={item.slug}>
            <ListItem {...item} />
          </Link>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default List;
