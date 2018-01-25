import React, { Fragment } from "react";
import Img from "gatsby-image";
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
    const { next, prev } = this.props.pathContext;

    return (
      <Fragment>
        <LeftContent>
          <Img resolutions={featuredImage.resolutions} alt={title} />
          {images &&
            images.map(image => (
              <Img
                resolutions={image.resolutions}
                alt={image.title}
                key={image.id}
              />
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
        <ProjectNavigation date={date} next={next} prev={prev} />
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
        title
        resolutions(width: 950, height: 844) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
      }
      images {
        id
        title
        resolutions(width: 950, height: 844) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;

export default ProjectTemplate;
