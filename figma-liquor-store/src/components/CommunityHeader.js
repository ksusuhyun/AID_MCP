import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%; /* 피그마 div_1:834 width (1248px)는 MainContainer에서 처리 */
  height: 68px; /* 피그마 div_1:834 height */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: space-between; 
  margin-bottom: 32px; /* 헤더와 카테고리 탭 사이 간격 (div_1:834 y:-98, h:68 => bottom at -30. div_1:835 y:2. diff = 32) */
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 30px; /* 커뮤니티_1:838 fontSize */
  color: #111827; /* 커뮤니티_1:838 color */
  font-weight: 400; /* 피그마 기본값 */
  margin: 0;
`;

const PageSubtitle = styled.p`
  font-size: 16px; /* 술과 관련된..._1:840 fontSize */
  color: #4b5563; /* 술과 관련된..._1:840 color */
  margin-top: 8px; /* 제목과의 간격 (y:-52 - (y:-98 + h:36)) = 10, 여유있게 8px */
  margin-bottom: 0;
`;

const NavLink = styled.a`
  font-size: 30px; /* 최저가 비교_1:1739 fontSize */
  color: #6b7280; /* 최저가 비교_1:1739 color */
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #111827; /* 호버 시 색상 변경 */
  }
`;

function CommunityHeader() {
  return (
    <HeaderWrapper>
      <TitleContainer>
        <PageTitle>커뮤니티</PageTitle>
        <PageSubtitle>술과 관련된 다양한 이야기를 나누어보세요</PageSubtitle>
      </TitleContainer>
      <NavLink href="#">최저가 비교</NavLink> {/* 이전 페이지로 가는 링크 등으로 활용 가능 */}
    </HeaderWrapper>
  );
}

export default CommunityHeader; 