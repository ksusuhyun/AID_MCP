import React from 'react';
import styled from 'styled-components';

// 피그마에서 아이콘에 해당하는 SVG를 직접 추출하거나, 유사한 React 아이콘 라이브러리(예: react-icons)를 사용하는 것이 좋습니다.
// 여기서는 텍스트로 대체합니다.
const IconPlaceholder = ({ className, children }) => <span className={className}>{children}</span>;

const FiltersWrapper = styled.div`
  display: flex;
  gap: 16px; /* div_1:136과 div_1:137 사이 간격 (303 - 110 - 177) = 16px */
  margin-bottom: 32px; /* div_1:130과 div_1:131의 y값 차이 (-1106 - (-1036) + 38) = 32px */
  width: 100%;
  max-width: 1248px; /* div_1:130 width */
  height: 38px; /* div_1:130 height */
`;

const FilterSelectContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff; /* div_1:136 background */
  border: 1px solid #e5e7eb; /* div_1:136 stroke */
  border-radius: 8px; /* div_1:136 cornerRadius */
  padding: 8px 16px; /* 내부 아이콘/텍스트와 프레임 간격 고려 */
  gap: 8px; /* 아이콘과 텍스트 사이 간격 */
  cursor: pointer;

  /* 아이콘 프레임의 크기는 i_1:142 (16x16), i_1:148 (10x16) 등 다양하므로, 적절히 조절 */
  /* SVG 아이콘이 들어갈 자리 */
`;

const StyledIcon = styled(IconPlaceholder)`
  /* 피그마 i_1:142, i_1:148 등의 스타일을 여기에 적용 */
  color: #1f2937; /* 아이콘 색상은 텍스트 색상과 유사하게 설정하거나, SVG 자체 색상 사용 */
  font-size: 16px; /* 임의 지정 */
`;

const SelectText = styled.span`
  font-size: 16px; /* 전체 카테고리_1:144, 가격 낮은순_1:150 fontSize */
  color: #1f2937; /* 전체 카테고리_1:144, 가격 낮은순_1:150 color */
  line-height: 19.36px; /* 피그마 line-height */
`;

function Filters() {
  return (
    <FiltersWrapper>
      <FilterSelectContainer>
        {/* i_1:142 (검색 아이콘 등)을 위한 자리 */}
        {/* <StyledIcon>🔍</StyledIcon> */}
        <SelectText>전체 카테고리</SelectText>
        {/* Frame_1:146 (아래 화살표 아이콘 등)을 위한 자리 */}
        {/* <StyledIcon>▼</StyledIcon> */}
      </FilterSelectContainer>
      <FilterSelectContainer>
        {/* i_1:148 (정렬 아이콘 등)을 위한 자리 */}
        {/* <StyledIcon>⇅</StyledIcon> */}
        <SelectText>가격 낮은순</SelectText>
        {/* Frame_1:152 (아래 화살표 아이콘 등)을 위한 자리 */}
        {/* <StyledIcon>▼</StyledIcon> */}
      </FilterSelectContainer>
    </FiltersWrapper>
  );
}

export default Filters; 