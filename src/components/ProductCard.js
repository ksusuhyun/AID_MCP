import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 임시 아이콘
const StarIcon = () => <span style={{ color: '#f59e0b' }}>★</span>; // 노란색 별 아이콘

const CardWrapper = styled.div`
  background-color: #ffffff; /* div_1:138 background */
  border: 1px solid #e5e7eb; /* div_1:138 stroke */
  border-radius: 12px; /* div_1:138 cornerRadius */
  width: 294px; /* div_1:138 width */
  /* height: 470px; div_1:138 height - 내용은 유동적이므로 min-height 등으로 대체하거나 내용에 맞게 자동 조절되도록 둡니다. */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 이미지가 카드를 벗어나지 않도록 */
`;

const ImageContainer = styled.div`
  width: 100%; /* div_1:154 width (294px) */
  height: 294px; /* div_1:154 height */
  background-color: #e5e7eb; /* div_1:168 background (이미지 없을 시 배경색) */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* 태그 위치 조정을 위해 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너에 맞게 채워지도록 */
  }
`;

const PlaceholderImageText = styled.span`
  font-size: 16px; /* 상품 이미지_1:260 fontSize */
  color: #ffffff; /* 상품 이미지_1:260 color (피그마 기준은 흰색이나, 배경이 밝아 임의로 어둡게 변경) */
  color: #6b7280; /* 좀 더 잘보이도록 */
`;

const Tag = styled.span`
  position: absolute;
  top: 12px; /* span_1:169 y (-1024)와 부모 div_1:154 y (-1036) 차이 */
  left: 12px; /* span_1:169 x (122)와 부모 div_1:154 x (110) 차이 */
  background-color: ${(props) => props.color || '#4b5563'}; /* span_1:169 background */
  color: #ffffff; /* 한정판_1:197 color */
  font-size: 14px; /* 한정판_1:197 fontSize */
  padding: 4px 8px; /* 내부 텍스트와 태그 배경 간격 (높이 28, 폰트 17 -> 패딩 (28-17)/2 ~ 5.5 -> 4px, 좌우 8px 임의)*/
  border-radius: 4px; /* span_1:169 cornerRadius */
  line-height: 1; /* 텍스트 수직 정렬을 위해 */
`;

const InfoContainer = styled.div`
  padding: 16px; /* div_1:155 내부 요소들과의 간격 고려 (예: 글렌피딕_1:171 x:126, 부모 x:110 => 16px) */
  /* height: 176px; div_1:155 height - 내용에 따라 자동 조절 */
  display: flex;
  flex-direction: column;
  gap: 10px; /* 요소들 간의 대략적인 간격 */
`;

const ProductName = styled.h3`
  font-size: 16px; /* 글렌피딕 12년_1:171 fontSize */
  color: #1f2937; /* 글렌피딕 12년_1:171 color */
  font-weight: 400; /* 피그마 기본값 */
  margin: 0;
  line-height: 1.2; /* 기본 줄 간격 */
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px; /* 4.8_1:202 fontSize */
  color: #1f2937; /* 4.8_1:202 color */
`;

const ReviewCount = styled.span`
  color: #6b7280; /* (234)_1:204 color */
  font-size: 16px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px; /* 가격 사이 간격 */
`;

const OriginalPrice = styled.span`
  font-size: 16px; /* ₩89,000_1:206 fontSize */
  color: #9ca3af; /* ₩89,000_1:206 color */
  text-decoration: line-through;
`;

const Discount = styled.span`
  font-size: 16px; /* -20%_1:208 fontSize */
  color: #4b5563; /* -20%_1:208 color */
  margin-left: 8px;
`;

const CurrentPrice = styled.span`
  font-size: 18px; /* ₩71,200_1:210 fontSize */
  color: #1f2937; /* ₩71,200_1:210 color */
  font-weight: bold; /* 현재 가격 강조 */
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* InfoContainer 내에서 가격 아래 버튼을 밀어내기 위해 */
  padding-top: 10px; /* 가격 정보와 버튼 사이 간격 */
`;

const BuyButton = styled.button`
  background-color: #111827; /* button_1:211 background */
  color: #ffffff; /* 구매하기_1:262 color */
  font-size: 16px; /* 구매하기_1:262 fontSize */
  font-weight: 400;
  padding: 10px 16px; /* button_1:211 height 40, 내부 텍스트 높이 20 고려 */
  border-radius: 8px; /* button_1:211 cornerRadius */
  border: none;
  cursor: pointer;
  text-align: center;
  line-height: 1.2;

  &:hover {
    background-color: #374151; /* 호버 시 약간 어둡게 */
  }
`;

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { 
    id,
    name, 
    rating, 
    reviews, 
    originalPrice, 
    discount, 
    currentPrice, 
    image, 
    tag, 
    tagColor 
  } = product;

  const handleBuyClick = () => {
    navigate('/product-detail');
  };

  return (
    <CardWrapper>
      <ImageContainer>
        {image ? <img src={image} alt={name} /> : <PlaceholderImageText>상품 이미지</PlaceholderImageText>}
        {tag && <Tag color={tagColor}>{tag}</Tag>}
      </ImageContainer>
      <InfoContainer>
        <ProductName>{name}</ProductName>
        <RatingContainer>
          <StarIcon /> {rating} 
          <ReviewCount>({reviews})</ReviewCount>
        </RatingContainer>
        
        <PriceContainer>
          {originalPrice && (
            <div>
              <OriginalPrice>{originalPrice}</OriginalPrice>
              {discount && <Discount>{discount}</Discount>}
            </div>
          )}
          <CurrentPrice>{currentPrice}</CurrentPrice>
        </PriceContainer>

        <BottomContainer>
            {/* 가격 표시가 버튼과 같은 줄에 있는 경우, 가격을 여기로 옮길 수 있습니다. */}
            {/* 현재 디자인에서는 가격이 위에 있고 버튼만 바닥에 있으므로 아래와 같이 처리 */}
            <div></div> {/* 왼쪽 공간을 차지하여 버튼을 오른쪽으로 밀기 위한 div */} 
            <BuyButton onClick={handleBuyClick}>구매하기</BuyButton>
        </BottomContainer>
      </InfoContainer>
    </CardWrapper>
  );
}

export default ProductCard; 