import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {

  // navigational links
  const navLinks = [
    {
      id: crypto.randomUUID(),
      label: 'About Me',
      href: '/',
    },
    {
      id: crypto.randomUUID(),
      label: 'Portfolio',
      href: '/Portfolio',
    },
    {
      id: crypto.randomUUID(),
      label: 'Contact Me',
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
    <header className='columns my-2 is-vcentered'>
      <h1 className='title column mt-2'>
        Chris L Stevenson
      </h1>
      <ul className='navbar column'>
        {navLinks.map(link => (
          <li key={link.id}>
            <Link
              to={link.href}
              className={currentPage === link.href ? 'navbar-item is-tab is-active' : 'navbar-item is-tab'}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
