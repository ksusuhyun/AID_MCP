import React, { useState, useEffect } from 'react';
import CocktailPageHeader from '../components/CocktailPageHeader';
import CocktailFilters from '../components/CocktailFilters';
import CocktailList from '../components/CocktailList';
import Pagination from '../components/Pagination';

const exampleCocktailVideos = [
  {
    id: 'yt1',
    thumbnailUrl: 'https://img.youtube.com/vi/hY5WIsHSXUM/hqdefault.jpg',
    duration: '0:59',
    title: '숏츠: 글렌피딕 하이볼 만드는 법',
    channelName: '빠른칵테일',
    channelAvatarUrl: 'https://via.placeholder.com/40/cccccc/000000?text=S',
    views: '조회수 1.3만회',
    uploadDate: '2025.05.22',
    videoUrl: 'https://youtube.com/shorts/hY5WIsHSXUM',
  },
  {
    id: 'yt2',
    thumbnailUrl: 'https://img.youtube.com/vi/uQv11Z_9M4I/hqdefault.jpg',
    duration: '4:13',
    title: '유튜브: 위스키로 즐기는 진짜 칵테일',
    channelName: '위스키 홈텐딩',
    channelAvatarUrl: 'https://via.placeholder.com/40/cccccc/000000?text=W',
    views: '조회수 9천회',
    uploadDate: '2025.05.20',
    videoUrl: 'https://youtu.be/uQv11Z_9M4I',
  },
];

const CocktailRecipePage = () => {
  const [videos, setVideos] = useState([]);
  const [sortOption, setSortOption] = useState('date');       // 'date' | 'views'
  const [platformOption, setPlatformOption] = useState('all'); // 'all' | 'youtube' | 'shorts'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setVideos(exampleCocktailVideos);
  }, []);

  // 🔍 필터 + 정렬 적용
  const filteredVideos = videos
    .filter(video => {
      if (platformOption === 'all') return true;
      if (platformOption === 'youtube') return !video.videoUrl.includes('/shorts/');
      if (platformOption === 'shorts') return video.videoUrl.includes('/shorts/');
      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'views') {
        const parseViews = (str) => {
          if (!str) return 0;
          const numeric = str.replace(/[^0-9.]/g, '').replace('만', '0000');
          return parseFloat(numeric);
        };
        return parseViews(b.views) - parseViews(a.views);
      } else {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      }
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVideos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-screen-xl mx-auto">
        <CocktailPageHeader
          title="글렌피딕 12년 칵테일 레시피"
          description={`추천 칵테일 영상 ${filteredVideos.length}개`}
        />

        <CocktailFilters
          sortOption={sortOption}
          onSortChange={setSortOption}
          platformOption={platformOption}
          onPlatformChange={setPlatformOption}
        />

        <CocktailList videos={currentItems} />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isDarkMode={true}
          />
        )}
      </div>
    </div>
  );
};

export default CocktailRecipePage;
