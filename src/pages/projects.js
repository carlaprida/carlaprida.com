import React, { Fragment, Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { LeftContent, RightContent } from '../components/styled';

const ProjectList = styled.ul`
  justify-self: center;
  align-self: center;
  list-style: none;
  font-size: 2rem;
  line-height: 1.75;
  text-align: center;

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: null,
    };
  }

  handleHover(project) {
    this.setState({
      project: project.featuredImage.file.url,
    });
  }

  render() {
    const projects = this.props.data.projects.edges;
    return (
      <Fragment>
        <LeftContent>
          <img src={this.state.project} alt="Cute cat" />
        </LeftContent>
        <RightContent>
          <ProjectList>
            {projects.map(({ node }) => (
              <li key={node.id}>
                <Link onMouseOver={() => this.handleHover(node)} onFocus={() => this.handleHover(node)} to={`/projects/${node.id}`}>{node.title}</Link>
              </li>
            ))}
          </ProjectList>
        </RightContent>
      </Fragment>
    );
  }
}

export const pageQuery = graphql`
  query projectsQuery {
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          featuredImage {
            file {
              title
              url
            }
          }
        }
      }
    }
  }
`;

export default Projects;
