/*
 * Header for all pages contains my name in the upper left and the navbar aligned to the right
 */

import NavBar from './Navigation'

export default function Header() {
  return (
    <header className='columns my-2 is-vcentered'>
      <h1 className='title column is-two-fifths mt-2'>
        Chris L Stevenson
      </h1>

      <NavBar />

    </header>
  )
}
