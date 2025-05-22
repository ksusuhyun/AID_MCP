import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const ListWrapper = styled.div`
  /* 피그마 div_1:855. PostItem에서 margin-bottom으로 각 아이템 간 간격 처리 */
  width: 100%; 
`;

function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>게시글이 없습니다.</p>;
  }

  return (
    <ListWrapper>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ListWrapper>
  );
}

export default PostList; 