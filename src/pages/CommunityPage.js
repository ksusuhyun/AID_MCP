import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';

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

const ContentLayout = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;

const PostsSection = styled.div`
  flex-grow: 1;
`;

function CommunityPage() {
  // ✅ 1. 탭 ID 기반으로 상태 관리
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ID → 실제 게시글 category 매핑
  const categoryMap = {
    all: '전체',
    free: '자유게시판',
    humor: '유머',
    guide: '주류가이드',
  };

  const posts = [
    {
      id: '1',
      category: '자유게시판',
      title: '위스키 입문자를 위한 추천',
      author: '술꾼123',
      date: '2025-05-13',
      preview: '처음 위스키를 접하시는 분들께 추천드리고 싶은 제품이 있어서 공유드립니다...',
      views: 245,
      likes: 18,
      comments: 32,
      authorImage: null,
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
      authorImage: null,
    },
  ];

  // ✅ 2. 필터링된 게시글 계산
  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter(post => post.category === categoryMap[selectedCategory]);

  const popularPosts = [
    { id: 'p1', title: '위스키 입문자 가이드', rank: 1 },
    { id: 'p2', title: '와인 보관방법 총정리', rank: 2 },
    { id: 'p3', title: '맥주 브루어리 투어 후기', rank: 3 },
  ];

  const popularTags = ['#위스키', '#와인', '#맥주', '#칵테일'];

  return (
    <>
      <Header currentPage="/community" />
      <PageWrapper>
        <MainContent>
          {/* ✅ 3. 선택된 탭 ID를 전달 */}
          <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
          <ContentLayout>
            <PostsSection>
              <PostList posts={filteredPosts} />
            </PostsSection>
            <Sidebar popularPosts={popularPosts} popularTags={popularTags} />
          </ContentLayout>
        </MainContent>
      </PageWrapper>
    </>
  );
}

export default CommunityPage;
