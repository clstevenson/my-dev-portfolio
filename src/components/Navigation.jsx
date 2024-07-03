/*
 * Navigation links (navbar) which is used in the Header component
 * React router is used for client-side routing (faster than server requests)
 */

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { COLORS, QUERIES } from "../util/constants";

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

  return (
    <Wrapper>
      <NavBar>
        {navLinks.map((link) => (
          <ListItem key={link.id} isCurrent={link.href === currentPage}>
            <NavLink to={link.href}>{link.label}</NavLink>
          </ListItem>
        ))}
      </NavBar>
      <DropDownWrapper>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <img src="./assets/menu.svg" alt="navigation menu icon" />
          </DropdownMenu.Trigger>
          <DropdownMenuContent align="end" loop="true">
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.id}>
                {link.href === currentPage && <CurrentPage />}
                <NavLink to={link.href}>{link.label}</NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu.Root>
      </DropDownWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: relative;
`;

const DropdownMenuItem = styled(DropdownMenu.Item)`
  position: relative;
  padding: 0 24px;
  outline: none;

  &[data-highlighted] {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }
`;

const CurrentPage = styled(DotFilledIcon)`
  position: absolute;
  transform: translate(-16px, 5px);
`;

const DropDownWrapper = styled.div`
  display: none;

  @media ${QUERIES.mobile} {
    display: revert;
  }
`;

const DropdownMenuContent = styled(DropdownMenu.Content)`
  background-color: ${COLORS.white};
  border-radius: 4px;
  box-shadow: 2px 4px 8px ${COLORS.gray[500]};
`;

const NavBar = styled.ul`
  /* display: none; */
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 1.15rem;
  list-style: none;

  @media ${QUERIES.tabletAndLess} {
    gap: 12px;
    font-size: 1rem;
  }
  @media ${QUERIES.mobile} {
    display: none;
  }
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
  text-decoration: none;

  ${ListItem}:hover & {
    color: ${COLORS.primary_light};
  }

  ${DropdownMenuItem}[data-highlighted] & {
    color: ${COLORS.white};
    outline: none;
  }
`;
