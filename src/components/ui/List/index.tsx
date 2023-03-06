import React, { useRef, useState } from 'react';
import ListItem from 'components/ui/ListItem';
import { ProductProps } from 'models/product';
import { CategoryProps } from 'models/category';
import * as S from './styles';
import SortSelect from '../SortSelect';

type ListProps = {
  title?: string;
  items: ProductProps[] | CategoryProps[];
  sortable?: boolean;
  sortOptions?: {
    label: string;
    value: string;
  }[];
  onSort?: (value: string) => void;
};

const List = ({ title, items, sortable, sortOptions, onSort }: ListProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.ListWrapper>
        {sortable && !!sortOptions && !!onSort && (
          <SortSelect
            options={sortOptions}
            onChange={(e) => onSort(e.currentTarget.value)}
          />
        )}
        <S.ListContent>
          {items.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </S.ListContent>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default List;
