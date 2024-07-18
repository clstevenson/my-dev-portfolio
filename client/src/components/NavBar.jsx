/* eslint-disable react/prop-types */
/* 
 Component to display a horizontal list of navigational links.
 Input prop: array of navigation objects with the following fields: id, label, href.
 The id is unique UUID, the label is the text that is displayed, and the href is the link.
 */

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS, QUERIES } from "../util/constants";

export default function NavBar({ navLinks }) {
  return (
    <Wrapper>
      {navLinks.map((link) => (
        <ListItem key={link.id} href={link.href}>
          <NavLink to={link.href}>{link.label}</NavLink>
        </ListItem>
      ))}
    </Wrapper>
  );
}

// Styled components
const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 1.15rem;
  list-style: none;

  @media ${QUERIES.tabletAndLess} {
    gap: 10px;
    font-size: 1rem;
  }
`;

const ListItem = styled.li`
  padding: 0 4px;
  transition: transform 400ms;
  /* indicate current back with bottom border */
  border-bottom: ${({ href }) =>
    useLocation().pathname === href && "2px solid " + COLORS.primary};

  &:hover {
    transform-origin: 50% 100%;
    transform: scale(1.1);
    transition: transform 200ms;
  }
`;

const NavLink = styled(Link)`
  color: ${COLORS.primary};
  text-decoration: none;

  ${ListItem}:hover & {
    color: ${COLORS.primary_light};
  }
`;
