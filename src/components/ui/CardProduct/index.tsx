import * as S from './styles';

export type ProductDescription = {
  brand: string;
  title: string;
  category: 'Men' | 'Ladies' | 'Headwear & Goods' | 'Hoodies';
  price: number;
};
export type CardProductProps = {
  id: number;
  title?: string;
  description?: ProductDescription;
  image: string;
  isFeatured?: boolean;
};

function currencyFormatter(value: number) {
  return `${value.toFixed(2).replace('.', ',')}€`;
}

const CardProduct = ({ title, description, image }: CardProductProps) => (
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
        <S.PriceContent>
          <span>{currencyFormatter(description.price)}</span>
        </S.PriceContent>
      </S.DescriptionWrapper>
    )}
  </S.Wrapper>
);

export default CardProduct;
