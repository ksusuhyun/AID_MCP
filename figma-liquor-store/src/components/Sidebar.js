import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  width: 394px; /* 피그마 div_1:846 width 근사치 */
  display: flex;
  flex-direction: column;
  gap: 24px; /* 인기 게시글과 인기 태그 섹션 간격 (div_1:856과 div_1:857 y 차이 309-77-208 = 24px) */
`;

const Section = styled.div`
  background-color: #ffffff; /* div_1:856, div_1:857 background */
  border: 1px solid #e5e7eb; /* div_1:856, div_1:857 stroke */
  border-radius: 12px; /* div_1:856, div_1:857 cornerRadius */
  padding: 24px; /* 내부 제목/내용과의 여백 (h3_1:860 y:101, 부모 y:77 => 24px) */
`;

const SectionTitle = styled.h3`
  font-size: 18px; /* 인기 게시글_1:875 fontSize */
  color: #1f2937; /* 인기 게시글_1:875 color */
  font-weight: 400;
  margin: 0 0 16px 0; /* 제목과 목록/태그 간 간격 (div_1:861 y:145, h3_1:860 y:101,h:28 => 145-(101+28)=16px) */
`;

const PopularPostItem = styled.div`
  display: flex;
  align-items: baseline; /* 순위와 제목 정렬 */
  gap: 8px; /* 순위와 제목 간격 */
  margin-bottom: 12px; /* 항목 간 간격 (div_1:876과 div_1:877 y 차이 (189-145-28 (높이 근사치)) /2 등 고려) */
  font-size: 16px; /* 위스키 입문자 가이드_1:1075 fontSize */
  color: #1f2937; /* 위스키 입문자 가이드_1:1075 color */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Rank = styled.span`
  font-size: 18px; /* 1_1:1073 fontSize */
  color: #9ca3af; /* 1_1:1073 color */
  font-weight: 400; /* 피그마에는 굵기 없음 */
  min-width: 20px; /* 순위 숫자 자리 확보 */
  text-align: left;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* 태그 간의 간격 */
`;

const Tag = styled.span`
  background-color: #f3f4f6; /* span_1:881 background */
  color: #1f2937; /* #위스키_1:1085 color */
  font-size: 14px; /* #위스키_1:1085 fontSize */
  padding: 4px 12px; /* 대략적인 패딩 (span_1:881 height 28, text height 17) */
  border-radius: 9999px; /* span_1:881 cornerRadius */
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }
`;

function Sidebar({ popularPosts, popularTags }) {
  return (
    <SidebarWrapper>
      {popularPosts && popularPosts.length > 0 && (
        <Section>
          <SectionTitle>인기 게시글</SectionTitle>
          {popularPosts.map((post) => (
            <PopularPostItem key={post.id}>
              <Rank>{post.rank}</Rank>
              <span>{post.title}</span>
            </PopularPostItem>
          ))}
        </Section>
      )}

      {popularTags && popularTags.length > 0 && (
        <Section>
          <SectionTitle>인기 태그</SectionTitle>
          <TagContainer>
            {popularTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </Section>
      )}
    </SidebarWrapper>
  );
}

export default Sidebar; 