import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styled from "styled-components";

import { LeftContent, RightContent } from "../components/styled";

const ProjectList = styled.ul`
  list-style: none;
  font-size: 2rem;
  line-height: 1.75;

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    font-style: italic;
  }
`;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: null
    };
  }

  handleHover(project) {
    this.setState({
      project
    });
  }

  render() {
    const projects = this.props.data.projects.edges;
    const selectedProject = this.state.project;
    return (
      <Fragment>
        <LeftContent>
          {selectedProject && (
            <Img
              resolutions={selectedProject.featuredImage.resolutions}
              alt={selectedProject.featuredImage.title}
            />
          )}
        </LeftContent>
        <RightContent alignSelf="center">
          <ProjectList>
            {projects.map(({ node }) => (
              <li key={node.id}>
                <Link
                  onMouseOver={() => this.handleHover(node)}
                  onFocus={() => this.handleHover(node)}
                  to={`/projects/${node.id}`}
                >
                  {node.title}
                </Link>
              </li>
            ))}
          </ProjectList>
        </RightContent>
      </Fragment>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export const pageQuery = graphql`
  query projectsQuery {
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          featuredImage {
            resolutions(width: 950, height: 844) {
              base64
              aspectRatio
              width
              height
              src
              srcSet
            }
            title
          }
        }
      }
    }
  }
`;

export default Projects;
