import React from 'react';
import CocktailCard from './CocktailCard';

const CocktailList = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <p className="text-center text-gray-400">표시할 칵테일 레시피 영상이 없습니다.</p>;
  }

  return (
    // Figma nodeId: 1:772 (카드 목록 컨테이너)
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
      {videos.map((video) => (
        <CocktailCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default CocktailList; 