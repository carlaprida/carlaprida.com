import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-self: center;
  justify-self: center;
  grid-column: content-left / content-right;
`;

const IndexPage = () => (
  <Wrapper>
    <h2>Hola! Welcome :)</h2>
  </Wrapper>
);

export default IndexPage;
