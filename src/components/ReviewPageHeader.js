import React from 'react';

// 임시 별 아이콘 (실제 프로젝트에서는 SVG 아이콘 등으로 대체)
const StarIcon = ({ filled = true, className = 'w-5 h-5 text-yellow-400' }) => (
  <svg className={className} fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.99 6.63L2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ReviewPageHeader = ({ productName, averageRating, totalReviews }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      {/* Figma Node ID: 1:1506 (div - 전체 컨테이너) */}
      {/* Figma Node ID: 1:1509 (div - 제목과 평점 영역) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Figma Node ID: 1:1519 (TEXT - 글렌피딕 12년 리뷰) */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">
          {productName} 리뷰
        </h1>
        {/* Figma Node ID: 1:1520 (div - 평점 영역) */}
        <div className="flex items-center">
          {/* Figma Node ID: 1:1552 (TEXT - 4.8) */}
          <span className="text-2xl font-bold text-gray-800 mr-2">{averageRating}</span>
          {/* Figma Node ID: 1:1553 (div - 별 아이콘들) */}
          <div className="flex mr-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} filled={index < Math.round(averageRating)} />
            ))}
          </div>
          {/* Figma Node ID: 1:1555 (TEXT - (234개 리뷰)) */}
          <span className="text-gray-600 text-sm">({totalReviews}개 리뷰)</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewPageHeader; 