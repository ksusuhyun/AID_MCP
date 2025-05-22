import React from 'react';

const PriceDisplay = () => {
  return (
    <div className="my-4">
      {/* Figma nodeId: 1:1188 */}
      {/* Figma nodeId: 1:1206 */}
      <div className="flex items-end mb-1">
        {/* Figma nodeId: 1:1236 */}
        <span className="text-lg text-gray-500 line-through mr-2">
          ₩89,000
        </span>
        {/* Figma nodeId: 1:1237 */}
        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm font-semibold">
          {/* Figma nodeId: 1:1273 */}
          20% 할인
        </span>
      </div>
      {/* Figma nodeId: 1:1207 */}
      <div>
        {/* Figma nodeId: 1:1239 */}
        <span className="text-3xl font-bold text-gray-800">
          ₩71,200
        </span>
      </div>
    </div>
  );
};

export default PriceDisplay; 