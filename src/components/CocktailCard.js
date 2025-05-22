import React from 'react';

// Eye icon component (조회수 아이콘)
const EyeIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274 1.008-.678 1.953-1.188 2.825M12 17a5 5 0 01-5-5h10a5 5 0 01-5 5z"></path>
  </svg>
);

const CocktailCard = ({ video }) => {
  const { thumbnailUrl, duration, title, channelName, channelAvatarUrl, views, uploadDate, videoUrl } = video;

  return (
    <a
      href={videoUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
    >
      {/* 썸네일 */}
      <div className="relative h-56 bg-gray-700 flex items-center justify-center">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white">썸네일</span>
        )}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      {/* 내용 */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-start mb-3">
            {channelAvatarUrl ? (
              <img src={channelAvatarUrl} alt={channelName} className="w-10 h-10 rounded-full mr-3" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-600 mr-3 flex items-center justify-center text-white text-sm">
                {channelName ? channelName.charAt(0) : 'C'}
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold text-white mb-1 leading-tight truncate-2-lines" title={title}>
                {title}
              </h3>
              <p className="text-sm text-gray-400 truncate" title={channelName}>
                {channelName}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
          <div className="flex items-center">
            <EyeIcon />
            <span>{views}</span>
          </div>
          <span>{uploadDate}</span>
        </div>
      </div>
    </a>
  );
};

export default CocktailCard;
