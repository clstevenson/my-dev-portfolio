/*
 * About Me: default home page of the Portfolio app
 * All static content
 */

export default function AboutMe() {
  return (
    <section className="content">
      <div className="columns">
        <img alt="profile pic" src="./assets/cls_profile.jpg" className="ml-1" />
        <h2 className='is-size-4'>My Journey as a Developer</h2>
      </div>
      <p>
        I received my first personal computer while studying for my Chemistry PhD and fell in love with programming in a course on <a href='https://en.wikipedia.org/wiki/Chemometrics' target='_new'>Chemometrics</a>, which included multiple assignments that involved coding. My dissertation, <em>Special Considerations in Estimating Detection Limits</em>, made heavy use of Monte Carlo simulations coded in what was then called QuickBASIC, my first experience with an IDE.
      </p>
      <p>
        My postdoctoral work at the <a href='https://www.ornl.gov' target='_new'>Oak Ridge National Laboratory</a> involved devising new methods analyze chemical pollutants and as part of that research I had to write an instrument driver program to simultaneously control the wavelengths of a laser and the light detection device. Since synchronization was so critical, I could not use a high-level language. I taught myself C and fell further down the coding rabbit hole.
      </p>
      <p>
        As a Chemistry Professor at the <a href='https://chemistry.richmond.edu' target='_new'>University of Richmond</a> I have learned and used a number of other languages as part of my research and teaching responsibilities, notably MATLAB and R for data science applications. I created a course in <em>Measurement Statistics</em> that is based on Excel, writing dozens of <a href='https://gist.github.com/clstevenson/aadeb15b628e815fea18e986d49bed87' target='_new'>Lambda Functions</a> to support an comprehensive add-in (written in VBA) that was developed for the class (the add-in is private for now but will soon be refactored from the ground up using Typescript and React, possibly with some Python as needed).
      </p>
      <p>
        After decades of self-taught programming, the 24-week <a href="https://bootcamps.richmond.edu/coding/" target='_new'>Full Stack Coding Bootcamp</a> was my first programming experience in a structured learning environment as part of a group. During that time we learned a number of interesting technologies: HTML, CSS, Javascript, Node.js, React.js, MySQL and MongoDB databases, and many more. I am looking forward to using these technologies to create many data analysis and visualization applications for the web and desktop environments.
      </p>
      <p>
        This portfolio will chronicle that journey, and I welcome all <a href="mailto:cstevens@richmond.edu">feedback and collagoration inquiries</a>.
      </p>
    </section>
  )
}
