import React from 'react';

const CocktailFilters = ({ sortOption, onSortChange, platformOption, onPlatformChange }) => {
  return (
    <div className="flex justify-end space-x-4 mb-8">
      <div className="relative">
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 appearance-none pr-8"
        >
          <option value="date">최신순</option>
          <option value="views">조회순</option>
        </select>
      </div>
      <div className="relative">
        <select
          value={platformOption}
          onChange={(e) => onPlatformChange(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 appearance-none pr-8"
        >
          <option value="all">전체</option>
          <option value="youtube">유튜브</option>
          <option value="shorts">숏츠</option>
        </select>
      </div>
    </div>
  );
};

export default CocktailFilters;
