import { useMemo } from 'react';
import List from 'components/ui/List';
import productMock from 'API/products.json';
import categoryMock from 'API/categories.json';
import Base from 'templates/Base';
import { ProductProps } from 'models/product';
import * as S from './styles';

const Home = () => {
  const featuredProducts = useMemo<ProductProps[]>(() => {
    return productMock
      .filter((product) => product.isFeatured)
      .slice(0, 4)
      .map((product) => {
        if (!product.slug.includes(product.category.toLowerCase())) {
          product.slug = `${product.category.toLowerCase()}/${product.slug}`;
        }
        return product;
      });
  }, []);

  return (
    <Base>
      <S.Wrapper>
        <List title="Categories" items={categoryMock} />
        <List title="Featured Products" items={featuredProducts} />
      </S.Wrapper>
    </Base>
  );
};

export default Home;
