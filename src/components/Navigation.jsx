/*
 * Navigation links (navbar) which is used in the Header component
 * React router is used for client-side routing (faster than server requests)
 */

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../util/constants";

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

  // get the current page to highlight the correct link tab
  const currentPage = useLocation().pathname;

  // Bulma class 'is-active' is used to indicate which tag is currently active
  // (ie corresponding to the page being displayed)
  return (
    <NavBar>
      {navLinks.map((link) => (
        <ListItem key={link.id} isCurrent={link.href === currentPage}>
          <NavLink to={link.href}>{link.label}</NavLink>
        </ListItem>
      ))}
    </NavBar>
  );
}

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 1.15rem;
`;

const ListItem = styled.li`
  padding: 0 4px;
  transition: transform 400ms;
  border-bottom: ${({ isCurrent }) => {
    return isCurrent && "2px solid " + COLORS.primary;
  }};

  &:hover {
    transform-origin: 50% 100%;
    transform: scale(1.1);
    transition: transform 200ms;
  }
`;

const NavLink = styled(Link)`
  color: ${COLORS.primary};

  ${ListItem}:hover & {
    color: ${COLORS.primary_light};
  }
`;
