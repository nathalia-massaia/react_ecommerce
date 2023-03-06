import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = Pick<
  ButtonProps,
  'btntype' | 'minimal' | 'fullwidth' | 'rounded'
>;

const WrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${darken(0.1, theme.colors.primary)};
    }
  `,

  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightgray};
  `,

  minimal: (theme: DefaultTheme, btntype: 'primary' | 'default') => css`
    max-width: fit-content;
    padding: 0;
    background: none;
    color: ${theme.colors[btntype === 'primary' ? 'primary' : 'black']};

    &:hover {
      background: none;
      color: ${darken(
        0.1,
        theme.colors[btntype === 'primary' ? 'primary' : 'gray']
      )};
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray};
    cursor: not-allowed;

    &:hover {
      background-color: ${theme.colors.gray};
      color: ${theme.colors.white};
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, btntype, minimal, fullwidth, rounded, disabled }) => css`
    border: 0;
    outline: none;
    box-shadow: none;
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    font-weight: ${theme.font.bold};
    transition: ${theme.transition.default};
    text-transform: uppercase;
    width: ${fullwidth ? '100%' : 'fit-content'};
    border-radius: ${rounded === 'none'
      ? 'none'
      : theme.border.radius[rounded || 'rounded']};

    &:hover {
      background-color: ${darken(0.1, theme.colors.lightgray)};
    }

    ${!!btntype && WrapperModifiers[btntype](theme)}
    ${minimal && WrapperModifiers.minimal(theme, btntype || 'default')}
    ${disabled && WrapperModifiers.disabled(theme)}
  `}
`;
