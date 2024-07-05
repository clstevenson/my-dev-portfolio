/*
 * Footer for all pages, containing three clickable logos
 */

import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <a href="https://github.com/clstevenson" target="_new">
        <img alt="My GitHub page" width="24px" src="./assets/GitHub.svg" />
      </a>
      <a
        href="https://www.linkedin.com/in/chris-stevenson-72bb2b18/"
        target="_new"
      >
        <img
          alt="My LinkedIn page"
          width="24px"
          src="./assets/In-Blue-40.png"
        />
      </a>
      <a href="mailto:cstevens@richmond.edu">
        <img
          alt="Send me an email"
          width="24px"
          src="./assets/mail-outline.svg"
        />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  background: transparent;
  margin-top: auto;
`;
