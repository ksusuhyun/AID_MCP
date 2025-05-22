import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionButtons = ({ productId }) => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    if (productId) {
      navigate(`/product-reviews/${productId}`);
    } else {
      console.warn('Product ID is not available for reviews.');
      navigate('/product-reviews');
    }
  };

  const handleCocktailRecommendClick = () => {
    navigate('/cocktail-recipes');
  };

  return (
    <div className="flex space-x-4 mt-6">
      {/* Figma nodeId: 1:1190 */}
      {/* Figma nodeId: 1:1210 */}
      <button 
        onClick={handleReviewClick}
        className="bg-gray-900 text-white py-3 px-6 rounded-lg text-base font-medium w-full md:w-[278px] h-[52px] flex items-center justify-center">
        {/* Figma nodeId: 1:1249 */}
        리뷰 보기
      </button>
      {/* Figma nodeId: 1:1211 */}
      <button 
        onClick={handleCocktailRecommendClick}
        className="border border-gray-900 text-gray-900 py-3 px-6 rounded-lg text-base font-medium w-full md:w-[282px] h-[52px] flex items-center justify-center">
        {/* Figma nodeId: 1:1251 */}
        칵테일 추천
      </button>
    </div>
  );
};

export default ActionButtons; 