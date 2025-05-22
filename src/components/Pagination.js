import React from 'react';

// 임시 아이콘 (실제 프로젝트에서는 SVG 아이콘 등으로 대체)
const ChevronLeftIcon = ({ className = 'w-5 h-5' }) => (
  // Figma Node ID: 1:1539 (Frame), 1:1540 (Frame)
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className = 'w-5 h-5' }) => (
  // Figma Node ID: 1:1548 (Frame), 1:1549 (Frame)
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 실제 페이지네이션 로직은 더 복잡할 수 있음 (예: ... 표시, 많은 페이지 처리)
  // 여기서는 단순한 숫자 목록으로 가정

  return (
    <div className="flex justify-center items-center space-x-2 mt-8 py-4">
      {/* Figma Node ID: 1:1508 (div - 페이지네이션 컨테이너) */}
      
      {/* Figma Node ID: 1:1513 (button - 이전) */}
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeftIcon />
      </button>

      {pageNumbers.map(number => (
        // Figma Node ID: 1:1514, 1:1515, 1:1516 (button - 페이지 번호)
        <button 
          key={number} 
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md border text-sm font-medium 
            ${currentPage === number 
              ? 'bg-gray-900 text-white border-gray-900' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}
          `}
        >
          {/* Figma TEXT Node ID: 1:1543 (1), 1:1545 (2), 1:1547 (3) */}
          {number}
        </button>
      ))}

      {/* Figma Node ID: 1:1517 (button - 다음) */}
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination; 