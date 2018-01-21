import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const LeftContent = styled.div`
  grid-area: content-left;
  overflow-y: scroll;
  height: auto;
`;

const RightContent = styled.div`
  display: grid;
  grid-area: content-right;
  padding: 2rem 0;
`;

const ProjectList = styled.ul`
  justify-self: center;
  align-self: center;
  list-style: none;
  font-size: 2rem;
  line-height: 1.75;
`;

const Projects = () => (
  <Fragment>
    <LeftContent>
      <img src="https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166" alt="Cute cat" />
      <img src="https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166" alt="Cute cat" />
      <img src="https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166" alt="Cute cat" />
    </LeftContent>
    <RightContent>
      <ProjectList>
        <li>Título Proyecto Uno</li>
        <li>Título Proyecto Dos</li>
        <li>Título Proyecto Tres</li>
        <li>Título Proyecto Cuatro</li>
        <li>Título Proyecto Cinco</li>
        <li>Título Proyecto Seis</li>
      </ProjectList>
    </RightContent>
  </Fragment>
);

export default Projects;
