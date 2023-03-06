import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  btntype?: 'primary' | 'default';
  minimal?: boolean;
  fullwidth?: boolean;
  rounded?: 'rounded' | 'full' | 'none';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  btntype = 'default',
  icon,
  minimal,
  fullwidth,
  rounded = 'rounded',
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      btntype={btntype}
      minimal={minimal}
      fullwidth={fullwidth}
      rounded={rounded}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
