import CardProducts, { CardProductProps } from 'components/ui/CardProduct';
import { Link } from 'react-router-dom';
import * as S from './styles';

export type ProductListProps = {
  items: CardProductProps[];
  title?: string;
};

const ProductList = ({ items, title }: ProductListProps) => {
  return (
    <S.Wrapper>
      {!!title && <h2>{title}</h2>}
      <S.ListWrapper>
        {items.map((product) => (
          <Link
            key={product.id}
            to={`/${product.description!.category}/${
              product.description!.title
            }`}
          >
            <CardProducts {...product} />
          </Link>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default ProductList;
