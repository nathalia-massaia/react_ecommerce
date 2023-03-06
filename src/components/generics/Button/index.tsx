import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  btntype?: 'primary' | 'default';
  minimal?: boolean;
  fullwidth?: boolean;
  rounded?: 'rounded' | 'full' | 'none';
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  btntype = 'default',
  icon,
  minimal,
  fullwidth,
  rounded = 'rounded',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      btntype={btntype}
      minimal={minimal}
      fullwidth={fullwidth}
      rounded={rounded}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
