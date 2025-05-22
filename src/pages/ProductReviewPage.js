// ✅ ProductReviewPage.js 수정본
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewPageHeader from '../components/ReviewPageHeader';
import ReviewFilters from '../components/ReviewFilters';
import ReviewList from '../components/ReviewList';
import Pagination from '../components/Pagination';

const allProductsReviewData = {
  "glenfiddich-12": {
    productName: '글렌피딕 12년',
    averageRating: 4.8,
    totalReviews: 234,
    reviews: [
      { id: 'gf12-r1', user: { name: '김주류', avatar: '' }, purchaseDate: '2025-05-10', rating: 5.0, text: '글렌피딕 12년 최고! 부드럽고 향기로워요.', photos: ['https://via.placeholder.com/150/e0e0e0/333?text=GF12+R1'], helpfulCount: 12, commentCount: 3 },
      { id: 'gf12-r2', user: { name: '위스키초보', avatar: '' }, purchaseDate: '2025-05-12', rating: 4.0, text: '입문용으로 좋다고 해서 구매했습니다. 만족스러워요.', photos: [], helpfulCount: 5, commentCount: 1 },
    ]
  }
};

const ProductReviewPage = () => {
  const { productId } = useParams();
  const [productReviews, setProductReviews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('latest');
  const [ratingOption, setRatingOption] = useState('all');
  const [photoOnly, setPhotoOnly] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const currentProductData = allProductsReviewData[productId];
    if (currentProductData) {
      setProductReviews(currentProductData);
    } else {
      setProductReviews({ productName: '상품 정보 없음', averageRating: 0, totalReviews: 0, reviews: [] });
    }
    setCurrentPage(1);
  }, [productId]);

  if (!productReviews) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center"><p>리뷰 정보를 불러오는 중...</p></div>;
  }

  const filteredSortedReviews = productReviews.reviews
    .filter(r => (ratingOption === 'all' || Math.floor(r.rating) === parseInt(ratingOption)))
    .filter(r => (!photoOnly || (r.photos && r.photos.length > 0)))
    .sort((a, b) => {
      if (sortOption === 'high') return b.rating - a.rating;
      if (sortOption === 'low') return a.rating - b.rating;
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    });

  const indexOfLastReview = currentPage * itemsPerPage;
  const indexOfFirstReview = indexOfLastReview - itemsPerPage;
  const currentReviewsOnPage = filteredSortedReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(filteredSortedReviews.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <ReviewPageHeader 
          productName={productReviews.productName} 
          averageRating={productReviews.averageRating} 
          totalReviews={productReviews.totalReviews} 
        />
        <ReviewFilters 
          sortOption={sortOption}
          onSortChange={setSortOption}
          ratingOption={ratingOption}
          onRatingChange={setRatingOption}
          photoOnly={photoOnly}
          onPhotoOnlyToggle={() => setPhotoOnly(!photoOnly)}
        />
        <ReviewList reviews={currentReviewsOnPage} />
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        )}
      </div>
    </div>
  );
};

export default ProductReviewPage;
