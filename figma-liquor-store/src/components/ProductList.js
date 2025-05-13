import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* 카드의 최소 너비 280px, 공간에 따라 자동 배치 */
  gap: 24px; /* 카드 사이의 간격, 피그마에서 div_1:138과 div_1:139 x 좌표 차이 (428-110-294) = 24px */
  width: 100%;
  max-width: 1248px; /* div_1:131 width */
`;

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>상품이 없습니다.</p>;
  }

  return (
    <ListWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListWrapper>
  );
}

export default ProductList; 