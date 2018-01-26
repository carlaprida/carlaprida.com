import React, { Fragment } from "react";
import Img from "gatsby-image";
import * as PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import arrow from "../../static/img/arrow.svg";

import { LeftContent, RightContent } from "../components/styled";
import ProjectNavigation from "../components/ProjectNavigation";

const oscillate = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const Arrow = styled.object`
  visibility: hidden;
  width: 24px;
  position: absolute;
  top: 85%;
  left: 50%;
  animation: ${oscillate} 1s ease-in-out infinite;
  transition: visibility 0s, opacity 0.5s linear;
  opacity: 0;

  ${LeftContent}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

class ProjectTemplate extends React.Component {
  constructor() {
    super();

    this.state = {
      scrolling: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    if (e.target.scrollTop > 150) {
      this.setState({ scrolling: true });
    } else {
      this.setState({ scrolling: false });
    }
  }

  render() {
    const { project } = this.props.data;
    const { title, description, date, featuredImage, images } = project;
    const { next, prev } = this.props.pathContext;

    return (
      <Fragment>
        <LeftContent onScroll={e => this.handleScroll(e)}>
          <Img resolutions={featuredImage.resolutions} alt={title} />
          {!this.state.scrolling && (
            <Arrow type="image/svg+xml" data={arrow}>
              Your browser does not support SVGs
            </Arrow>
          )}
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
