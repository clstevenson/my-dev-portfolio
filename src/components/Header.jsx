/*
 * Header for all pages contains my name in the upper left and the navbar aligned to the right
 */

import { useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { WEIGHTS } from "../util/constants";

export default function Header() {
  const [name, setName] = useState("Christopher L. Stevenson");

  return (
    <Wrapper>
      <Title>{name}</Title>
      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: ${WEIGHTS.bold};
  margin-right: auto;
`;

// This will need to disappear on mobile devices
const NavBar = styled(Navigation)``;
