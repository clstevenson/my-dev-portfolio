/*
 * Navigation links (navbar) which is used in the Header component
 * React router is used for client-side routing (faster than server requests)
 */

import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {

  // navigational links
  const navLinks = [
    {
      id: crypto.randomUUID(),
      label: 'About',
      href: '/',
    },
    {
      id: crypto.randomUUID(),
      label: 'Portfolio',
      href: '/Portfolio',
    },
    {
      id: crypto.randomUUID(),
      label: 'Contact',
      href: '/Contact',
    },
    {
      id: crypto.randomUUID(),
      label: 'Resume',
      href: '/Resume',
    },
  ];

  // get the current page to highlight the correct link tab
  const currentPage = useLocation().pathname;

  // Bulma class 'is-active' is used to indicate which tag is currently active
  // (ie corresponding to the page being displayed)
  return (
    <ul className='navbar column'>
      {navLinks.map(link => (
        <li key={link.id}>
          <Link
            to={link.href}
            className={currentPage === link.href
              ? 'navbar-item is-tab is-active'
              : 'navbar-item is-tab'}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
