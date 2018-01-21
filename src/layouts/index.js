import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "content" "footer";
  height: 100vh;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "content-left content-right";
  grid-gap: 1rem;
  grid-area: content;
  height: calc(100vh - 140px);
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Main>{children()}</Main>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
