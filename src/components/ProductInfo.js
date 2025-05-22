import React from 'react';

const ProductInfo = () => {
  return (
    <div className="flex flex-col">
      {/* Figma nodeId: 1:1187 */}
      <div className="mb-4">
        {/* Figma nodeId: 1:1202 */}
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {/* Figma nodeId: 1:1231 */}
          한정판
        </span>
      </div>
      {/* Figma nodeId: 1:1204 */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        글렌피딕 12년
      </h1>
      {/* Figma nodeId: 1:1205 */}
      <div className="flex items-center text-base text-gray-800">
        {/* Figma nodeId: 1:1232 - Assuming a star icon would be here */}
        {/* Figma nodeId: 1:1267, 1:1268 - Placeholder for star icon */}
        <span className="mr-1">⭐</span> {/* 실제 아이콘으로 교체 필요 */}
        {/* Figma nodeId: 1:1271 */}
        <span className="font-semibold">4.8</span>
        {/* Figma nodeId: 1:1234 */}
        <span className="ml-2 text-gray-600">(234개 리뷰)</span>
      </div>
    </div>
  );
};

export default ProductInfo; 