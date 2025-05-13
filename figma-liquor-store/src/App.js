import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CommunityPage from './pages/CommunityPage'; // 새로 만들 커뮤니티 페이지

// 기본 HTML 요소에 대한 스타일 및 폰트 적용
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif; /* 피그마에서 사용된 기본 폰트 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f9fafb; /* 피그마 main(1:832) 배경색 */
  }

  * {
    box-sizing: border-box;
  }
`;

// Inter 폰트를 사용하기 위해 HTML의 <head>에 아래 링크를 추가해야 합니다.
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

function App() {
  return (
    <>
      <GlobalStyle />
      <CommunityPage />
    </>
  );
}

export default App; 