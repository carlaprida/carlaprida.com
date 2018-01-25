import React, { Fragment } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import * as PropTypes from "prop-types";

import { LeftContent, RightContent } from "../components/styled";
import ProjectNavigation from "../components/ProjectNavigation";

class ProjectTemplate extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    const { project } = this.props.data;
    const { title, description, date, featuredImage, images } = project;

    return (
      <Fragment>
        <LeftContent>
          <img src={featuredImage.file.url} alt={title} />
          {images &&
            images.map(image => (
              <img src={image.file.url} alt={image.file.title} />
            ))}
        </LeftContent>
        <RightContent alignSelf="center" pl="4rem" pr="4rem">
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html || ""
            }}
          />
        </RightContent>
        <ProjectNavigation date={date} />
      </Fragment>
    );
  }
}

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.object,
      featuredImage: PropTypes.object,
      images: PropTypes.array,
      title: PropTypes.string.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    project: contentfulProject(id: { eq: $id }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "MM/YY")
      featuredImage {
        file {
          url
        }
      }
      images {
        file {
          url
        }
      }
    }
  }
`;

export default ProjectTemplate;
