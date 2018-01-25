import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Content = styled.div`
  display: grid;
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'auto')};
  justify-self: ${props => (props.justifySelf ? props.justifySelf : 'auto')};
  padding-left: ${props => (props.pl ? props.pl : 'initial')} ;
  padding-top: ${props => (props.pt ? props.pt : 'initial')} ;
  padding-right: ${props => (props.pr ? props.pr : 'initial')} ;
  padding-bottom: ${props => (props.pb ? props.pb : 'initial')} ;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
`;

export const LeftContent = Content.extend`
  grid-area: content-left;
  overflow-y: scroll;
`;

export const RightContent = Content.extend`
  grid-area: content-right;
`;

export const Button = '';
