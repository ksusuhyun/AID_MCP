import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png'; // 경로 맞게 수정하세요

const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: #142E4E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 40px;
  margin-right: 12px;
`;

const MenuSection = styled.nav`
  display: flex;
  gap: 32px;
`;

const MenuLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ active }) => (active ? '#FEBD4E' : '#E5E7EB')};
  text-decoration: none;

  &:hover {
    color: #FEBD4E;
  }
`;

function Header() {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <LogoSection>
        <LogoImage src={logoImg} alt="주르륵 로고" />
      </LogoSection>
      <MenuSection>
        <MenuLink to="/" active={location.pathname === '/'}>최저가 비교</MenuLink>
        <MenuLink to="/community" active={location.pathname === '/community'}>커뮤니티</MenuLink>
      </MenuSection>
    </HeaderWrapper>
  );
}

export default Header;
