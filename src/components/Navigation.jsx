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
