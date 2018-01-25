import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: repeat(3, 1fr);
  align-content: end;
  justify-items: center;
  padding: 1rem 0;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ProjectNavigation = props => (
  <Wrapper>
    <div>
      {props.prev && (
        <StyledLink to={`/projects/${props.prev.id}`}>
          <u>Previous Project:</u> {props.prev.title}
        </StyledLink>
      )}
    </div>
    <div>{props.date}</div>
    <div>
      {props.next && (
        <StyledLink to={`/projects/${props.next.id}`}>
          <b>
            <u>Next Project:</u> {props.next.title}
          </b>
        </StyledLink>
      )}
    </div>
  </Wrapper>
);

export default ProjectNavigation;
