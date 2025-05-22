import React from 'react';

const CocktailPageHeader = ({ title, description }) => {
  return (
    <div className="mb-8">
      {/* Figma nodeId: 1:785 */}
      <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
      {/* Figma nodeId: 1:787 */}
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default CocktailPageHeader; 