import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1248px; /* div_1:129 width */
  height: 68px; /* div_1:129 height */
  display: flex;
  align-items: center;
  justify-content: space-between; /* 로고와 커뮤니티 링크 양 끝 정렬 */
  padding: 0 16px; /* 내부 여백, 피그마 기준 div(1:129)의 x좌표 110, 자식 최저가비교(1:133) x좌표 110, Frame1(1:1741) x좌표 475 등을 고려 */
  /* margin-bottom: 32px; div_1:129와 div_1:130의 y값 차이 (-1206 - (-1106) + 68) = 32px인데, MainContent에서 marginTop으로 처리 */
`;

const LogoTitle = styled.h1`
  font-size: 30px; /* 최저가 비교_1:133 fontSize */
  color: #111827; /* 최저가 비교_1:133 color */
  font-weight: 400; /* 최저가 비교_1:133 fontWeight */
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px; /* 다양한 주류..._1:135 fontSize */
  color: #4b5563; /* 다양한 주류..._1:135 color */
  margin: 8px 0 0 0; /* 최저가 비교와의 간격, (1160 - 1206 + 36) = -10인데, 텍스트 높이 고려해서 재조정 */
`;

const NavLink = styled.a`
  font-size: 30px; /* 커뮤니티_1:1731 fontSize */
  color: #6b7280; /* 커뮤니티_1:1731 color */
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #111827;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <LogoTitle>최저가 비교</LogoTitle>
        <Subtitle>다양한 주류의 최저가를 한눈에 비교해보세요</Subtitle>
      </LogoContainer>
      <NavLink href="#">커뮤니티</NavLink> {/* Frame 1_1:1741 내부 텍스트 */} 
    </HeaderWrapper>
  );
}

export default Header; 