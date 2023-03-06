import React, { SelectHTMLAttributes } from 'react';
import * as S from './styles';

type SortSelectProps = {
  options: {
    label: string;
    value: string;
  }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const SortSelect = ({ options, ...props }: SortSelectProps) => {
  return (
    <S.Wrapper>
      SORT BY
      <S.SelectContent {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SelectContent>
    </S.Wrapper>
  );
};

export default SortSelect;
