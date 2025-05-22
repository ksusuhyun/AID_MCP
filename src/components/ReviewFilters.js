import React from 'react';

const ReviewFilters = ({
  sortOption,
  onSortChange,
  ratingOption,
  onRatingChange,
  photoOnly,
  onPhotoOnlyToggle
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
        {/* 정렬 기준 선택 */}
        <div className="relative w-full md:w-auto">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="latest">최신순</option>
            <option value="high">평점 높은 순</option>
            <option value="low">평점 낮은 순</option>
          </select>
        </div>

        {/* 별점 필터 선택 */}
        <div className="relative w-full md:w-auto">
          <select
            value={ratingOption}
            onChange={(e) => onRatingChange(e.target.value)}
            className="appearance-none block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="all">전체 별점</option>
            <option value="5">5점</option>
            <option value="4">4점</option>
            <option value="3">3점</option>
            <option value="2">2점</option>
            <option value="1">1점</option>
          </select>
        </div>

        {/* 포토 리뷰만 보기 토글 버튼 */}
        <button
          onClick={onPhotoOnlyToggle}
          className={`w-full md:w-auto flex items-center justify-center ${
            photoOnly ? 'bg-indigo-100 border-indigo-500' : 'bg-gray-100'
          } hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg border text-sm`}
        >
          <div
            className={`w-4 h-4 border ${
              photoOnly ? 'bg-indigo-500 border-indigo-500' : 'border-gray-400'
            } rounded-sm mr-2 flex-shrink-0`}
          ></div>
          포토 리뷰만 보기
        </button>
      </div>
    </div>
  );
};

export default ReviewFilters;
