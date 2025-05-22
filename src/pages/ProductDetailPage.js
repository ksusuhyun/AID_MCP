import React from 'react';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';
import PriceDisplay from '../components/PriceDisplay';
import ProductDescription from '../components/ProductDescription';
import ActionButtons from '../components/ActionButtons';

const ProductDetailPage = () => {
  const currentProductId = "glenfiddich-12"; // 임시 상품 ID. 실제로는 props나 useParams 등으로 받아와야 함.
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <ProductImage />
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">

            <div className="flex flex-col space-y-4">
              <ProductInfo />
              <PriceDisplay />
              <ProductDescription />
            </div>
            <ActionButtons productId={currentProductId} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 