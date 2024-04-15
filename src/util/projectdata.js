/**
 * Repo data to display on the Portfolio page
 * Eventually this data will live on a database managed by
 */

const projectData = [
  {
    id: crypto.randomUUID(),
    title: 'Helping Heroes Blog',
    description: 'Post-covid communities are more fragmented, people are more isolated than ever. This blog is designed to provide a supportive electronic community where helping heroes can provide advice and resources to others in need.',
    notes: 'A full-stack web application developed as a collaborative project with two partners. It that has been forked into my repo for further development. I created the model and seed routines, created all API routes, contributed the single-post page with upVote capability and commenting, and created the ability for admin users to manage the site. I plan to refactor as a React app and add some functionality.',
    repoURL: 'https://github.com/clstevenson/helping-heroes-blog',
    deployedURL: 'https://damp-chamber-10567-589627f31d06.herokuapp.com/',
    graphicURL: './assets/HelpingHeroesScreenshot.png',
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
      'MySQL',
      'Sequelize',
      'Handlebars',
      'Bulma',
    ],
  },
  {
    id: crypto.randomUUID(),
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
      'back-end',
      'MongoDB',
      'Mongoose',
    ],
  },
];

export default projectData;
