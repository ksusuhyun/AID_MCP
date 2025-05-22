import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 0 20px;
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 20px auto 0 auto;
`;

function ProductPage() {
  const products = [
    {
      id: '1',
      name: '글렌피딕 12년',
      rating: 4.8,
      reviews: 234,
      originalPrice: '₩89,000',
      discount: '-20%',
      currentPrice: '₩71,200',
      image: '/images/1.png',
      tag: '한정판',
      tagColor: '#4b5563',
    },
    {
      id: '2',
      name: '발렌타인 17년',
      rating: 4.5,
      reviews: 156,
      originalPrice: '₩150,000',
      discount: '-15%',
      currentPrice: '₩127,500',
      image: '/images/2.png',
      tag: '마감임박',
      tagColor: '#6b7280',
    },
    {
      id: '3',
      name: '산토리 위스키',
      rating: 4.7,
      reviews: 89,
      originalPrice: '₩65,000',
      discount: '0%',
      currentPrice: '₩65,000',
      image: '/images/3.png',
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
      image: '/images/4.png',
      tag: '베스트',
      tagColor: '#4b5563',
    },
  ];

  return (
    <>
      <Header />
      <PageWrapper>
        <MainContent>
          <Filters />
          <ProductList products={products} />
        </MainContent>
      </PageWrapper>
    </>
  );
}

export default ProductPage;
