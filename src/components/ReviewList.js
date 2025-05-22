import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-center text-gray-500 py-8">표시할 리뷰가 없습니다.</p>;
  }

  return (
    <div>
      {/* Figma Node ID: 1:1507 (div - 리뷰 목록 전체 컨테이너) */}
      {/* Figma Node ID: 1:1511 (div - 개별 리뷰 컨테이너, ReviewItem 내부에서 처리) */}
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList; 