import List from 'components/ui/List';
import productMock from 'API/products.json';
import categoryMock from 'API/categories.json';
import Base from 'templates/Base';
import { ProductProps } from 'models/product';

const Home = () => {
  return (
    <Base>
      <List title="Categories" items={categoryMock} />
      <List
        title="Featured Products"
        items={
          productMock
            .filter((product) => product.isFeatured)
            .slice(0, 4) as ProductProps[]
        }
      />
    </Base>
  );
};

export default Home;
