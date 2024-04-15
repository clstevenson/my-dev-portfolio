/**
 * This component displays information about my coding projects as a filterable list.
 * The input data will be defined here, but eventually will be in a database managed
 * by a separate (small) application.
 */

// component to display each object's data
import Project from '../components/Project';

/*
 * Static database of coding project data that feeds into the portfolio page
 * Eventually will be replaced with a database that can be updated by calling
 * into the GitHub API to get info on projects. A separate app will be created to
 * manage that database.
 */

const projectData = [
  {
    title: 'Helping Heroes Blog',
    description: 'Post-covid communities are more fragmented, people are more isolated than ever. This blog is designed to provide a supportive electronic community where helping heroes can provide advice and resources to others in need.',
    notes: 'A full-stack web application developed as a collaborative project with two partners. It that has been forked into my repo for further development. I created the model and seed routines, created all API routes, contributed the single-post page with upVote capability and commenting, and created the ability for admin users to manage the site. I plan to refactor as a React app and add some functionality.',
    repoURL: 'https://github.com/clstevenson/helping-heroes-blog',
    deployedURL: 'https://damp-chamber-10567-589627f31d06.herokuapp.com/',
    graphicURL: './src/assets/HelpingHeroesScreenshot.png',
    myCommits: 55,
    totalCommits: 105,
    isVideo: false,
    languagePercentage: [
      { JavaScript: 71.3 },
      { Handlebars: 28.4 },
      { CSS: 0.3 }
    ],
    isHighlight: true,
    isCollaboration: true,
    tags: [
      'full-stack',
      'express.js',
      'node.js',
      'MySQL',
      'Sequelize',
      'Handlebars',
      'Bulma',
      'REST'
    ],
  },
  {
    title: 'Social Network APIs',
    description: 'Development of RESTful routes intended for use in a technology-oriented social network. API routes are created for users to post their thoughts, react to other posts, and make Friend requests.',
    notes: 'This is a server-side application that uses a MongoDB database accessed through the Mongoose ODM.',
    repoURL: 'https://github.com/clstevenson/social-network-api',
    deployedURL: '',
    graphicURL: 'https://www.youtube.com/embed/Ky3bald6OmE',
    myCommits: 12,
    totalCommits: 12,
    isVideo: true,
    languagePercentage: [
      { JavaScript: 100 },
    ],
    isHighlight: true,
    isCollaboration: false,
    tags: [
      'back end',
      'Express',
      'MongoDB',
      'Mongoose',
      'REST',
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="content">
      <Project project={projectData[0]} />
      <Project project={projectData[1]} />
    </div>
  )
}
