import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';

import { LeftContent, RightContent } from '../components/styled';

const propTypes = {
  data: PropTypes.object.isRequired,
};

class ProjectTemplate extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    const { project } = this.props.data;
    const {
      title, description, date, featuredImage,
    } = project;

    return (
      <Fragment>
        <LeftContent>
          <img src={featuredImage.file.url} alt={title} />
        </LeftContent>
        <RightContent>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{
            __html: description.description || '',
          }}
          />
        </RightContent>
      </Fragment>
    );
  }
}

// ProjectTemplate.propTypes = propTypes;

export default ProjectTemplate;

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    project: contentfulProject(id: { eq: $id }) {
      title
      description {
        description
      }
      date
      featuredImage {
        file {
          url
        }
      }
    }
  }
`;
