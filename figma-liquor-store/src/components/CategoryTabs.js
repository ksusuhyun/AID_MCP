import React, { useState } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  width: 100%; /* 피그마 div_1:835 width (1248px)는 MainContainer에서 처리 */
  height: 43px; /* 피그마 div_1:835 height */
  border-bottom: 1px solid #e5e7eb; /* 피그마에는 각 버튼에 stroke가 있지만, 전체적인 하단 라인으로 대체 해석 */
`;

const TabButton = styled.button`
  padding: 0 16px; /* 버튼 내부 좌우 여백. button(1:841) x:110, text(1:848) x:126 -> 16px */
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px; /* 전체_1:848 fontSize */
  cursor: pointer;
  color: ${(props) => (props.active ? '#111827' : '#4b5563')}; /* 전체_1:848 color (활성) / 자유게시판_1:850 color (비활성) */
  border-bottom: ${(props) => (props.active ? '2px solid #111827' : 'none')}; /* 피그마 button_1:841 stroke (활성 탭 표시) */
  margin-bottom: -1px; /* 하단 border가 겹치지 않도록 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #111827;
  }
`;

const categories = [
  { id: 'all', name: '전체', figmaId: '1:841' }, // 피그마 ID는 참고용
  { id: 'free', name: '자유게시판', figmaId: '1:842' },
  { id: 'humor', name: '유머', figmaId: '1:843' },
  { id: 'guide', name: '주류가이드', figmaId: '1:844' },
];

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <TabsWrapper>
      {categories.map((category) => (
        <TabButton 
          key={category.id} 
          active={activeTab === category.id}
          onClick={() => setActiveTab(category.id)}
        >
          {category.name}
        </TabButton>
      ))}
    </TabsWrapper>
  );
}

export default CategoryTabs; 