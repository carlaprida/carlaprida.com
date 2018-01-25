import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const FooterWrapper = styled.div`
  border-top: 2px solid black;
  color: black;
  grid-area: footer;
  height: 70px;
  padding: 1.45rem;
  text-align: center;

  h2 {
    margin: 0;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h2>
      <StyledLink to="/projects/">Selected Projects</StyledLink>
    </h2>
  </FooterWrapper>
);

export default Footer;
