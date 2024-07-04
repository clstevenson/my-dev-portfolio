/* eslint-disable react/prop-types */
/* 
 This component is a drop-down modal with navigation links. It presents as a hamburger menu item
 which, when clicked, gives the modal. The props into the component are:
 - navLinks: an array of objects contining the navigation link data (properties: id, label, href)
 - offset_x and offset_y: offsets (in px) from the top right corner of the nearest fixed-position container in the calling function.

 Clicking away (or pressing ESC) will close the menu. The current page is indicated with a dot.
 */

import { useState, useEffect } from "react";
import styled from "styled-components";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Link, useLocation } from "react-router-dom";
// packages to narrow focus and disallow scrolling of background
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import { COLORS } from "../util/constants";

export default function NavMenu({ navLinks, offset_x = 0, offset_y = 48 }) {
  // get the current page to indicate the current link
  const currentPage = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  // set event listener for ESC key to close the drop-down
  useEffect(() => {
    function handleKeyDown(evt) {
      if (evt.code === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        onSubmit={() => setIsOpen(!isOpen)}
      >
        <img src="./assets/menu.svg" alt="navigation menu icon" />
      </Button>
      {isOpen && (
        <FocusLock returnFocus={true}>
          <RemoveScroll></RemoveScroll>
          <DropDownMenu
            offset_x={offset_x}
            offset_y={offset_y}
            onClick={() => setIsOpen(false)}
          >
            {navLinks.map((link) => (
              <ListItem key={link.id}>
                {link.href === currentPage && <CurrentPage />}
                <NavLink to={link.href}>{link.label}</NavLink>
              </ListItem>
            ))}
          </DropDownMenu>
        </FocusLock>
      )}
    </>
  );
}

// Styled Components
const Button = styled.button`
  margin: 8px 0;
  background-color: ${COLORS.gray[100]};
  outline-offset: 1px;
  border: 1px solid ${COLORS.gray[700]};

  &:focus {
    outline: 2px solid ${COLORS.primary_light};
  }
  & img {
    display: block;
  }
`;

const DropDownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ offset_y }) => offset_y}px;
  right: ${({ offset_x }) => offset_x}px;
  list-style: none;
  gap: 8px;
  padding: 8px 0;
  background-color: ${COLORS.white};
  border-radius: 4px;
  box-shadow: 2px 4px 8px ${COLORS.gray[500]};
`;

const ListItem = styled.li`
  padding: 0 24px;
`;

const NavLink = styled(Link)`
  color: ${COLORS.primary};
  text-decoration: none;
`;

const CurrentPage = styled(DotFilledIcon)`
  position: absolute;
  transform: translate(-16px, 5px);
`;
