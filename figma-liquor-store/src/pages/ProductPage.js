import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb; /* main_1:127 background */
  min-height: 100vh;
  padding: 0 20px; /* 좌우 여백 추가 */
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1280px; /* div_1:128 max-width */
  margin-top: 20px; /* 헤더와의 간격 */
`;

function ProductPage() {
  // 예시 상품 데이터 (실제로는 API 호출 등을 통해 가져옴)
  const products = [
    {
      id: '1',
      name: '글렌피딕 12년',
      rating: 4.8,
      reviews: 234,
      originalPrice: '₩89,000',
      discount: '-20%',
      currentPrice: '₩71,200',
      image: '/path/to/glenfiddich.jpg', // 실제 이미지 경로로 변경 필요
      tag: '한정판',
      tagColor: '#4b5563', // span_1:169 background
    },
    {
      id: '2',
      name: '발렌타인 17년',
      rating: 4.5,
      reviews: 156,
      originalPrice: '₩150,000',
      discount: '-15%',
      currentPrice: '₩127,500',
      image: '/path/to/ballantines.jpg', // 실제 이미지 경로로 변경 필요
      tag: '마감임박',
      tagColor: '#6b7280', // span_1:176 background (피그마에서는 #4b5563이지만, 다른 태그와 구분 위해 임의 지정)
    },
    {
      id: '3',
      name: '산토리 위스키',
      rating: 4.7,
      reviews: 89,
      originalPrice: null, // 할인 없는 상품
      discount: null,
      currentPrice: '₩65,000',
      image: '/path/to/suntory.jpg', // 실제 이미지 경로로 변경 필요
      tag: null,
    },
    {
      id: '4',
      name: '메이커스 마크',
      rating: 4.9,
      reviews: 312,
      originalPrice: '₩75,000',
      discount: '-25%',
      currentPrice: '₩56,250',
      image: '/path/to/makersmark.jpg', // 실제 이미지 경로로 변경 필요
      tag: '베스트',
      tagColor: '#4b5563', // span_1:189 background
    },
    // 필요시 상품 추가
  ];

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Filters />
        <ProductList products={products} />
      </MainContent>
    </PageWrapper>
  );
}

export default ProductPage; 