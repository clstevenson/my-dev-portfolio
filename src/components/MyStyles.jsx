/* Shared styled components */
import styled from "styled-components";

// Prose
export const ContentWrapper = styled.div`
  text-align: justify;

  & p {
    margin: 1rem 0;
    /* while I feel serif fonts are more legible, it is too jarring to switch back and forth */
    /* font-family: var(--font-serif); */
  }
`;

// Page titles
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;
