import List from 'components/ui/List';
import productMock from 'API/products.json';
import categoryMock from 'API/categories.json';
import Base from 'templates/Base';

const Home = () => {
  return (
    <Base>
      <List title="Categories" items={categoryMock} />
      <List
        title="Featured Products"
        items={productMock.filter((product) => product.isFeatured).slice(0, 4)}
      />
    </Base>
  );
};

export default Home;
