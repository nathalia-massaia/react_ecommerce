import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import CategoryPage from 'pages/category';
import CartPage from 'pages/cart';
import ProductPage from 'pages/product';
import * as S from './styles';

const Content = () => (
  <S.Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<CategoryPage />} />
      <Route path="/:category/:name" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </S.Wrapper>
);

export default Content;
