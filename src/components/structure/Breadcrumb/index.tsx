import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((path) => path !== '');

  const breadcrumbItems = [
    <React.Fragment key="home">
      <S.BreadcrumbLink to="/">Home</S.BreadcrumbLink>
      <S.BreadcrumbSeparator>/</S.BreadcrumbSeparator>
    </React.Fragment>,
    ...pathSegments.map((path, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const name = path.charAt(0).toUpperCase() + path.slice(1);

      const isLast = index === pathSegments.length - 1;

      return (
        <React.Fragment key={url}>
          {isLast ? (
            <span>{name}</span>
          ) : (
            <S.BreadcrumbLink to={url}>{name}</S.BreadcrumbLink>
          )}
          {!isLast && <S.BreadcrumbSeparator>/</S.BreadcrumbSeparator>}
        </React.Fragment>
      );
    })
  ];

  return <S.BreadcrumbWrapper>{breadcrumbItems}</S.BreadcrumbWrapper>;
};

export default Breadcrumb;
