export default function Footer() {
  return (
    <footer className='footer'>
      <div className="columns is-vcentered">
        {/* <p>Visit Me: </p> */}
        <a href="https://github.com/clstevenson" target="_new" className='mx-3'>
          <img alt="GitHub link" width="30px" src="./src/assets/GitHub.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/chris-stevenson-72bb2b18/" className='mx-3'>
          <img alt="LinkedIn link" width="30px" src="./src/assets/In-Blue-40.png"/>
        </a>
        <a href="mailto:cstevens@richmond.edu" className='mx-3'>
          <img alt="Email" width="30px" src="./src/assets/mail-outline.svg"/>
        </a>
      </div>
    </footer>
  )
}
