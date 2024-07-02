/*
 * Header for all pages contains my name in the upper left and the navbar aligned to the right
 */

import styled from "styled-components";
import NavBar from "./Navigation";
import { QUERIES, WEIGHTS } from "../util/constants";

export default function Header() {
  return (
    <Wrapper>
      <LongName>Christoper L Stevenson</LongName>
      <ShortName>Chris Stevenson</ShortName>
      <NavWrapper>
        <NavBar />
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: baseline;
  padding: 8px 0;
  background: transparent;
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

const NavWrapper = styled.div`
  @media ${QUERIES.mobile} {
    display: none;
  }
`;
