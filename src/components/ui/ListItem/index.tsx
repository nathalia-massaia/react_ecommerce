import { CategoryProps } from 'models/category';
import { ProductProps } from 'models/product';
import * as S from './styles';

export type ListItemProps = {
  item: ProductProps | CategoryProps;
};

const ListItem = ({ item }: ListItemProps) => {
  const isProduct = 'brand' in item;

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={item.image} alt="product img" />
      </S.ImageWrapper>

      {isProduct && (
        <>
          <S.DescriptionWrapper>
            <S.DescriptionContent>
              {<p>{item.brand}</p>}
              {<p>{item.title}</p>}
              {<p>{item.category}</p>}
            </S.DescriptionContent>

            <S.PriceContent>
              <span>{item.price}</span>
            </S.PriceContent>
          </S.DescriptionWrapper>

          <S.AddToCart>
            <button>Add to cart</button>
          </S.AddToCart>
        </>
      )}
    </S.Wrapper>
  );
};

export default ListItem;
