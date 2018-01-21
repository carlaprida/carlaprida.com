import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  border-bottom: 2px solid black;
  color: black;
  grid-area: header;
  height: 70px;
  padding: 1.45rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Header = () => (
  <HeaderWrapper>
    <h2>
      <StyledLink to="/">Carla Prida</StyledLink>
    </h2>
  </HeaderWrapper>
);

export default Header;
