// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import ProductPage from './pages/ProductPage';
// import CommunityPage from './pages/CommunityPage';

// // 글로벌 스타일
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     font-family: 'Inter', sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     background-color: #f9fafb;
//   }

//   * {
//     box-sizing: border-box;
//   }
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Router>
//         <Routes>
//           <Route path="/" element={<ProductPage />} />
//           <Route path="/community" element={<CommunityPage />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CommunityPage from './pages/CommunityPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductReviewPage from './pages/ProductReviewPage';
import CocktailRecipePage from './pages/CocktailRecipePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/product-detail" element={<ProductDetailPage />} />
      <Route path="/product-reviews/:productId" element={<ProductReviewPage />} />
      <Route path="/cocktail-recipes" element={<CocktailRecipePage />} />
    </Routes>
  );
}

export default App;