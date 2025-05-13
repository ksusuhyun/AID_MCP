import React from 'react';
import styled from 'styled-components';

// 임시 아이콘 (나중에 react-icons 등으로 교체 권장)
const EyeIcon = () => <span>👁️</span>; // 조회수 아이콘
const CommentIcon = () => <span>💬</span>; // 댓글 아이콘
const LikeIcon = () => <span>👍</span>; // 좋아요 아이콘 (피그마에는 없지만 추가)

const ItemWrapper = styled.div`
  background-color: #ffffff; /* div_1:858 background */
  border: 1px solid #e5e7eb; /* div_1:858 stroke */
  border-radius: 12px; /* div_1:858 cornerRadius */
  padding: 24px; /* div_1:864의 y:101, 부모 y:77 => 24px */
  margin-bottom: 16px; /* 게시글 사이 간격 (div_1:858과 div_1:859의 y차이 (337-77-244) = 16px) */
  /* width는 PostList에서 결정 (피그마 div_1:858 width 821.32px) */
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px; /* 작성자 정보와 카테고리 태그 간격 (span_1:865 y:161, div_1:864 y:101,h:44 => 161-(101+44) = 16px) */
`;

const AuthorImage = styled.img`
  width: 40px; /* img_1:929 width */
  height: 40px; /* img_1:929 height */
  border-radius: 50%; /* Frame_1:930 cornerRadius 9999 */
  background-color: #e5e7eb; /* 이미지 없을 시 배경 */
  margin-right: 12px; /* 이미지와 텍스트 정보 간격 (div_1:959 x:186, img_1:929 x:134,w:40 => 186-(134+40)=12px) */
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-size: 16px; /* 술꾼123_1:1093 fontSize */
  color: #1f2937; /* 술꾼123_1:1093 color */
  font-weight: 400;
`;

const PostDate = styled.span`
  font-size: 14px; /* 2025-05-13_1:1095 fontSize */
  color: #6b7280; /* 2025-05-13_1:1095 color */
  margin-top: 3px; /* 이름과 날짜 사이 간격 (date y:126, name y:103,h:20 => 126-(103+20)=3) */
`;

const CategoryTag = styled.span`
  display: inline-block;
  background-color: ${(props) => props.color || '#1f2937'}; /* span_1:865 background (자유게시판) or #374151 (유머) */
  color: #ffffff; /* 자유게시판_1:961 color */
  font-size: 14px; /* 자유게시판_1:961 fontSize */
  padding: 5px 8px; /* 대략적인 패딩 */
  border-radius: 4px; /* span_1:865 cornerRadius */
  margin-bottom: 8px; /* 태그와 제목 간격 (h3_1:866 y:197, span_1:865 y:161,h:28 => 197-(161+28)=8px) */
`;

const PostTitle = styled.h3`
  font-size: 18px; /* 위스키 입문자..._1:963 fontSize */
  color: #1f2937; /* 위스키 입문자..._1:963 color */
  font-weight: 400; /* 피그마엔 굵게 안되어있음 */
  margin: 0 0 8px 0; /* 제목과 내용 미리보기 간격 (p_1:867 y:233, h3_1:866 y:197,h:28 => 233-(197+28)=8px) */
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

const PostPreview = styled.p`
  font-size: 16px; /* 처음 위스키를..._1:965 fontSize */
  color: #4b5563; /* 처음 위스키를..._1:965 color */
  margin: 0 0 16px 0; /* 내용과 통계 정보 간격 (div_1:868 y:273, p_1:867 y:233,h:24 => 273-(233+24)=16px) */
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄 제한 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* 통계 아이템 간격 */
  font-size: 16px; /* 245_1:967 fontSize */
  color: #6b7280; /* 245_1:967 color */
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px; /* 아이콘과 숫자 간격 */
`;

const getCategoryTagColor = (categoryName) => {
  switch (categoryName) {
    case '자유게시판':
      return '#1f2937'; // span_1:865
    case '유머':
      return '#374151'; // span_1:870
    // 추가 카테고리 색상 정의
    default:
      return '#6b7280'; // 기본값
  }
};

function PostItem({ post }) {
  const { category, title, author, date, preview, views, likes, comments, authorImage } = post;
  const tagColor = getCategoryTagColor(category);

  return (
    <ItemWrapper>
      <AuthorInfo>
        <AuthorImage src={authorImage || 'https://via.placeholder.com/40'} alt={author} />
        <AuthorDetails>
          <AuthorName>{author}</AuthorName>
          <PostDate>{date}</PostDate>
        </AuthorDetails>
      </AuthorInfo>

      {category && <CategoryTag color={tagColor}>{category}</CategoryTag>}
      <PostTitle>{title}</PostTitle>
      <PostPreview>{preview}</PostPreview>

      <PostStats>
        <StatItem><EyeIcon /> {views}</StatItem>
        <StatItem><CommentIcon /> {comments}</StatItem>
        {likes !== undefined && <StatItem><LikeIcon /> {likes}</StatItem>}
      </PostStats>
    </ItemWrapper>
  );
}

export default PostItem; 