import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const LeftContent = styled.div`
  grid-area: content-left;
  overflow-y: scroll;
`;

export const RightContent = styled.div`
  display: grid;
  grid-area: content-right;
  padding: 2rem 0;
  text-align: center;
  align-self: center;
`;

export const Button = '';
