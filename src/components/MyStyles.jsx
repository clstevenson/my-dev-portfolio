/* Shared styled components */
import styled from "styled-components";
import { WEIGHTS } from "../util/constants";

// Prose
export const ContentWrapper = styled.div`
  text-align: justify;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;

  & p {
    margin: 1rem 0;
    font-family: var(--font-serif);
  }
`;

// Page titles
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;
