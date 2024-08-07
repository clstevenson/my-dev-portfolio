/*
 * Header for all pages contains my name in the upper left and the navbar aligned to the right
 */

import styled from "styled-components";
import Navigation from "./Navigation";
import { BREAKPOINTS, QUERIES, WEIGHTS } from "../util/constants";

export default function Header() {
  return (
    <Wrapper>
      <LongName>Christopher L Stevenson</LongName>
      <ShortName>Chris Stevenson</ShortName>
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: baseline;
  padding: 4px 32px;
  background: transparent;
  /* on large screens constrain width and keep centered */
  width: ${BREAKPOINTS.laptopMax}px;
  margin: 0 auto;

  @media ${QUERIES.laptopAndLess} {
    /* allow fluidity on smaller screens */
    width: revert;
    margin: revert;
  }
`;

const LongName = styled.h1`
  font-size: 1.75rem;
  font-weight: ${WEIGHTS.bold};
  margin-right: auto;

  @media ${QUERIES.tabletAndLess} {
    display: none;
  }
`;

const ShortName = styled(LongName)`
  display: none;
  font-size: 1.6rem;

  @media ${QUERIES.tabletAndLess} {
    display: revert;
  }
`;
