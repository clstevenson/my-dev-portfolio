/*
 * Navigation links (navbar) which is used in the Header component
 * React router is used for client-side routing (faster than server requests)
 */

import styled from "styled-components";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import { QUERIES } from "../util/constants";

export default function Navigation() {
  // navigational links
  const navLinks = [
    {
      id: crypto.randomUUID(),
      label: "About",
      href: "/",
    },
    {
      id: crypto.randomUUID(),
      label: "Portfolio",
      href: "/Portfolio",
    },
    {
      id: crypto.randomUUID(),
      label: "Contact",
      href: "/Contact",
    },
    {
      id: crypto.randomUUID(),
      label: "Resume",
      href: "/Resume",
    },
  ];

  return (
    <Wrapper>
      <HorizontalNav>
        <NavBar navLinks={navLinks} />
      </HorizontalNav>
      <DropdownNav>
        <NavMenu navLinks={navLinks} />
      </DropdownNav>
    </Wrapper>
  );
}

/* Styled Components */
const Wrapper = styled.nav`
  position: relative;
`;

const HorizontalNav = styled.div`
  @media ${QUERIES.mobile} {
    display: none;
  }
`;

const DropdownNav = styled.div`
  display: none;
  @media ${QUERIES.mobile} {
    display: revert;
  }
`;
