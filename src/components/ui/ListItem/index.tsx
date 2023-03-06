import { Link } from 'react-router-dom';
import { CategoryProps } from 'models/category';
import { ProductProps } from 'models/product';
import Button from 'components/generics/Button';
import useCart from 'hooks/useCart';
import { currencyFormatter } from 'utils/currencyFormatter';
import { truncate } from 'utils/stringTransform';
import * as S from './styles';

export type ListItemProps = {
  item: ProductProps | CategoryProps;
};

const ListItem = ({ item }: ListItemProps) => {
  const isProduct = 'brand' in item;
  const { addItem } = useCart();

  return (
    <S.Wrapper>
      <Link to={!isProduct ? item.slug : '#'}>
        <S.ImageWrapper>
          <img src={item.image} alt="product img" />
        </S.ImageWrapper>
        {!isProduct && <S.Title>{item.title}</S.Title>}

        {isProduct && (
          <S.DescriptionWrapper>
            <S.ProductTitle title={item.title.length > 24 ? item.title : ''}>
              {truncate(item.title)}
            </S.ProductTitle>
            <S.DescriptionContent>
              <S.ProductInfo>
                <p>{item.brand}</p>
              </S.ProductInfo>
            </S.DescriptionContent>
            <S.PriceContent>{currencyFormatter(item.price)}</S.PriceContent>
          </S.DescriptionWrapper>
        )}
      </Link>

      {isProduct && (
        <S.AddToCart>
          <Button
            rounded="none"
            btntype="primary"
            fullwidth
            onClick={() => addItem(item)}
          >
            Add to cart
          </Button>
        </S.AddToCart>
      )}
    </S.Wrapper>
  );
};

export default ListItem;
