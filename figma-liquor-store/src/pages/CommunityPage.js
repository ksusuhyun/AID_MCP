import React from 'react';
import styled from 'styled-components';
import CommunityHeader from '../components/CommunityHeader';
import CategoryTabs from '../components/CategoryTabs';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb; /* main_1:832 background */
  min-height: 100vh;
  padding: 0 20px; /* 좌우 여백은 필요에 따라 조정 */
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px; /* div_1:833 width */
  margin-top: 20px; /* 헤더와의 간격 */
  padding: 24px; /* 내부 콘텐츠와의 여백, 피그마 div(1:833)의 x:94, 자식 div(1:834) x:110 고려 */
`;

const ContentLayout = styled.div`
  display: flex;
  gap: 24px; /* 게시글 목록과 사이드바 간격, div_1:845와 div_1:846의 x좌표 및 너비로 유추 */
  margin-top: 32px; /* 카테고리 탭과의 간격, div_1:835와 div_1:836의 y값 차이 (77-2-43) = 32px */
`;

const PostsSection = styled.div`
  flex-grow: 1; /* 남은 공간을 채우도록 */
  /* 피그마에서 게시글 목록 영역(div_1:845)의 너비는 약 821px */
`;

function CommunityPage() {
  // 예시 데이터 (실제로는 API를 통해 가져옵니다)
  const posts = [
    {
      id: '1',
      category: '자유게시판',
      title: '위스키 입문자를 위한 추천',
      author: '술꾼123',
      date: '2025-05-13',
      preview: '처음 위스키를 접하시는 분들께 추천드리고 싶은 제품이 있어서 공유드립니다...',
      views: 245,
      likes: 18, // 피그마에는 없지만 일반적인 필드
      comments: 32,
      authorImage: null, //'/path/to/author1.jpg', // 실제 이미지 경로 또는 null
    },
    {
      id: '2',
      category: '유머',
      title: '와인 실수담 모음.zip',
      author: '와인러버',
      date: '2025-05-13',
      preview: '와인 마시다가 있었던 웃긴 실수들을 모아봤습니다...',
      views: 178,
      likes: 24,
      comments: 45,
      authorImage: null, //'/path/to/author2.jpg',
    },
    // ... 더 많은 게시물
  ];

  const popularPosts = [
    { id: 'p1', title: '위스키 입문자 가이드', rank: 1 },
    { id: 'p2', title: '와인 보관방법 총정리', rank: 2 },
    { id: 'p3', title: '맥주 브루어리 투어 후기', rank: 3 },
  ];

  const popularTags = ['#위스키', '#와인', '#맥주', '#칵테일'];

  return (
    <PageWrapper>
      <MainContainer>
        <CommunityHeader />
        <CategoryTabs />
        <ContentLayout>
          <PostsSection>
            <PostList posts={posts} />
          </PostsSection>
          <Sidebar popularPosts={popularPosts} popularTags={popularTags} />
        </ContentLayout>
      </MainContainer>
    </PageWrapper>
  );
}

export default CommunityPage; 