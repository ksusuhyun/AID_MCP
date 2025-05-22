import React from 'react';

// 임시 아이콘들 (실제 프로젝트에서는 SVG 아이콘 등으로 대체)
const StarIcon = ({ filled = true, className = 'w-4 h-4 text-yellow-400' }) => (
  <svg className={className} fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.99 6.63L2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ThumbsUpIcon = ({ className = 'w-3.5 h-3.5 text-gray-500 mr-1' }) => (
  // Figma nodeId: 1:1630 (Frame - 따봉 아이콘)
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.027a2 2 0 01-2-2V11a2 2 0 012-2h.5V6a2 2 0 00-2-2H8a2 2 0 00-2 2v5H4a2 2 0 00-2 2v7a2 2 0 002 2h2" />
  </svg>
);

const ChatAltIcon = ({ className = 'w-3.5 h-3.5 text-gray-500 mr-1' }) => (
  // Figma nodeId: 1:1635 (Frame - 말풍선 아이콘)
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z" />
  </svg>
);

const ReviewItem = ({ review }) => {
  const { user, purchaseDate, rating, text, photos, helpfulCount, commentCount } = review;

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      {/* Figma Node ID: 1:1511 (div - 개별 리뷰 컨테이너) */}
      {/* Figma Node ID: 1:1532 (div - 유저 정보, 별점, 리뷰 내용 등의 그룹) */}
      
      {/* 유저 정보 및 구매 날짜, 별점 */}
      <div className="flex items-center mb-3">
        {/* Figma Node ID: 1:1559 (div - 아바타 + 이름/날짜 그룹) */}
        {/* Figma Node ID: 1:1591 (img - 아바타) */}
        <img 
          src={user.avatar || 'https://via.placeholder.com/48'} // 임시 플레이스홀더 아바타
          alt={user.name} 
          className="w-12 h-12 rounded-full mr-4"
        />
        {/* Figma Node ID: 1:1621 (div - 이름/날짜 텍스트 그룹) */}
        <div className="flex-grow">
          {/* Figma Node ID: 1:1683 (div - 이름) -> 1:1722 (TEXT - 김주류) */}
          <p className="text-sm font-semibold text-gray-800">{user.name}</p>
          {/* Figma Node ID: 1:1684 (div - 구매날짜) -> 1:1724 (TEXT - 2025-05-10 구매) */}
          <p className="text-xs text-gray-500">{purchaseDate}</p>
        </div>
        {/* Figma Node ID: 1:1560 (div - 오른쪽 별점 그룹) */}
        <div className="flex items-center">
          {/* Figma Node ID: 1:1622 (div - 별 아이콘들) */}
          <div className="flex mr-1">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} filled={index < rating} />
            ))}
          </div>
          {/* Figma Node ID: 1:1624 (TEXT - 5.0) */}
          <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* 리뷰 텍스트 */}
      {/* Figma Node ID: 1:1533 (p - 리뷰 텍스트 컨테이너) -> 1:1562 (TEXT) */}
      <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">
        {text}
      </p>

      {/* 리뷰 사진 */}
      {/* Figma Node ID: 1:1534 (div - 사진들 컨테이너) */}
      {photos && photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4">
          {photos.map((photo, index) => (
            // Figma Node ID: 1:1563, 1:1564 (div - 개별 사진) / 1:1625 (span - 리뷰 사진 텍스트)
            <div key={index} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
              <img src={photo} alt={`Review photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 도움돼요, 댓글 버튼 */}
      {/* Figma Node ID: 1:1535 (div - 버튼 그룹) */}
      <div className="flex items-center text-xs text-gray-500">
        {/* Figma Node ID: 1:1565 (button - 도움돼요) */}
        <button className="flex items-center hover:text-indigo-600 mr-4">
          <ThumbsUpIcon />
          {/* Figma Node ID: 1:1628 (TEXT - 도움돼요 (12)) */}
          도움돼요 ({helpfulCount})
        </button>
        {/* Figma Node ID: 1:1566 (button - 댓글) */}
        <button className="flex items-center hover:text-indigo-600">
          <ChatAltIcon />
          {/* Figma Node ID: 1:1633 (TEXT - 댓글 (3)) */}
          댓글 ({commentCount})
        </button>
      </div>
    </div>
  );
};

export default ReviewItem; 