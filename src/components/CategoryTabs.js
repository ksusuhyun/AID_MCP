import React from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #e5e7eb;
`;

// 스타일 내부에서 active라는 prop을 안전하게 사용
const TabButton = styled.button.attrs(props => ({
  'aria-selected': props.$active, // 접근성 개선 (선택된 탭 표시)
}))`
  padding: 0 16px;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.$active ? '#111827' : '#4b5563')};
  border-bottom: ${(props) => (props.$active ? '2px solid #111827' : 'none')};
  margin-bottom: -1px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #111827;
  }
`;

// 탭 목록
const categories = [
  { id: 'all', name: '전체' },
  { id: 'free', name: '자유게시판' },
  { id: 'humor', name: '유머' },
  { id: 'guide', name: '주류가이드' },
];

function CategoryTabs({ selected, onSelect }) {
  return (
    <TabsWrapper>
      {categories.map((category) => (
        <TabButton
          key={category.id}
          $active={selected === category.id}  // ✅ 주의: $active로 스타일에만 전달
          onClick={() => onSelect(category.id)}
        >
          {category.name}
        </TabButton>
      ))}
    </TabsWrapper>
  );
}

export default CategoryTabs;
