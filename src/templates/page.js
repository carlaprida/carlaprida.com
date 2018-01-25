import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

import { LeftContent, RightContent } from '../components/styled';

const PageContent = styled.div`
  a {
    color: inherit;
  }

  a:hover {
    font-weight: bold;
  }
`;

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { page } = this.props.data;
    const content = page.content.childMarkdownRemark.html;
    return (
      <Fragment>
        <LeftContent alignSelf="center" justifySelf="center" pr="5rem" pl="5rem">
          <PageContent dangerouslySetInnerHTML={{
            __html: content || '',
          }}
          />
        </LeftContent>
        <RightContent />
      </Fragment>
    );
  }
}

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      id
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default Projects;
