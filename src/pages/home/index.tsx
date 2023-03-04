import ProductList from 'components/ui/ProductList';
import CategoryList from 'components/ui/CategoryList';
import productMock from 'components/ui/ProductList/mock';

import Base from 'templates/Base';

const Home = () => {
  return (
    <Base>
      <CategoryList />

      <ProductList
        title={'Featured Products'}
        items={productMock.filter((product) => product.isFeatured).slice(0, 4)}
      />
    </Base>
  );
};

export default Home;
