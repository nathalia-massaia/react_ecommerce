import * as S from './styles';
import { currencyFormatter } from 'utils/currencyFormatter';

export type ProductDescription = {
  brand: string;
  title: string;
  category: 'Men' | 'Ladies' | 'Headwear & Goods' | 'Hoodies';
  price: number;
};
export type ListItemProps = {
  id: number;
  title?: string;
  description?: ProductDescription;
  image: string;
  isFeatured?: boolean;
};

const ListItem = ({ title, description, image }: ListItemProps) => (
  <S.Wrapper hasDescription={!!description}>
    <S.ImageWrapper>
      <img src={image} alt="product img" />
    </S.ImageWrapper>
    {!!title && <S.Title>{title}</S.Title>}
    {!!description && (
      <S.DescriptionWrapper>
        <S.DescriptionContent>
          <p>{description.brand}</p>
          <p>{description.title}</p>
          <p>{description.category}</p>
        </S.DescriptionContent>
        <S.PriceContent>{currencyFormatter(description.price)}</S.PriceContent>
      </S.DescriptionWrapper>
    )}
  </S.Wrapper>
);

export default ListItem;
