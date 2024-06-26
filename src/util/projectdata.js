/**
 * Hardcoded repo data to display on the Portfolio page
 * Eventually this data will live on a database managed by another app
 * It would be nice (in that app) to use the GitHub API so that the data can be dynamically updated
 * and I could choose which repos to add to the DB
 */

const projectData = [
  {
    id: crypto.randomUUID(),
    title: "VMST Communication Website",
    description:
      "Prototype of a website for a client, the Virginia Masters Swim Team (VMST). The focus of the website is to foster communication between members and the VMST Board.",
    notes:
      "A full-stack web application developed as a collaborative project with three partners; it has been forked into my repo for further development pending demo to the VMST board by the end of July. I designed the MongoDB database and wrote the CRUD operations in Mongoose and GraphQL. I created the Membership Coordinator page including the CSV membership data upload.",
    repoURL: "https://github.com/clstevenson/VMST-Website",
    deployedURL: "https://vmst-website.onrender.com/",
    graphicURL: "./assets/VMST_Website_ScreenShot.png",
    myCommits: 71,
    totalCommits: 152,
    isVideo: false,
    languagePercentage: [{ JavaScript: 77.3 }, { CSS: 22.5 }, { HTML: 0.2 }],
    isHighlight: true,
    isCollaboration: true,
    tags: ["full-stack", "GraphQL", "MERN", "MongoDB"],
  },
  {
    id: crypto.randomUUID(),
    title: "Helping Heroes Blog",
    description:
      "Post-covid communities are more fragmented, people are more isolated than ever. This blog is designed to provide a supportive electronic community where helping heroes can provide advice and resources to others in need.",
    notes:
      "A full-stack web application developed as a collaborative project with two partners. It has been forked into my repo for further development. I created the model and seed routines, created all API routes, contributed the single-post page with upVote capability and commenting, and created the ability for admin users to manage the site. I plan to refactor as a React app and add some functionality.",
    repoURL: "https://github.com/clstevenson/helping-heroes-blog",
    deployedURL: "https://damp-chamber-10567-589627f31d06.herokuapp.com/",
    graphicURL: "./assets/HelpingHeroesScreenshot.png",
    myCommits: 55,
    totalCommits: 105,
    isVideo: false,
    languagePercentage: [
      { JavaScript: 71.3 },
      { Handlebars: 28.4 },
      { CSS: 0.3 },
    ],
    isHighlight: true,
    isCollaboration: true,
    tags: ["full-stack", "MySQL", "Sequelize", "Handlebars", "Bulma"],
  },
  {
    id: crypto.randomUUID(),
    title: "Social Network APIs",
    description:
      "Development of RESTful routes intended for use in a social network. API routes are created for users to post their thoughts, react to other posts, and make Friend requests.",
    notes:
      "This is a server-side application that uses a MongoDB database accessed through the Mongoose ODM.",
    repoURL: "https://github.com/clstevenson/social-network-api",
    deployedURL: "",
    graphicURL: "https://www.youtube.com/embed/Ky3bald6OmE",
    myCommits: 12,
    totalCommits: 12,
    isVideo: true,
    languagePercentage: [{ JavaScript: 100 }],
    isHighlight: true,
    isCollaboration: false,
    tags: ["back-end", "MongoDB", "Mongoose"],
  },
  {
    id: crypto.randomUUID(),
    title: "Tech Blog",
    description:
      "A CMS-style blog site where users can create blog posts and comment on the posts of others. Users must create an account to post blogs and comments and to read other posts in their entirety. Once logged in, users have the ability to edit or delete their own posts and comments.",
    notes:
      "This is a full-stack app that follows the MVC organizational structure and uses MySQL (with Sequelize as the ORM) and Handlebars as a templating system. Bulma was used as a CSS framework.",
    repoURL: "https://github.com/clstevenson/tech-blog",
    deployedURL: "https://cls-techblog-afd27a584df0.herokuapp.com/",
    graphicURL: "./assets/TechBlog.png",
    myCommits: 24,
    totalCommits: 24,
    isVideo: false,
    languagePercentage: [{ JavaScript: 78.5 }, { Handlebars: 21.5 }],
    isHighlight: true,
    isCollaboration: false,
    tags: ["full-stack", "MySQL", "Sequelize", "MVC", "Handlebars", "Bulma"],
  },
  {
    id: crypto.randomUUID(),
    title: "Employee Tracker Database",
    description:
      "A Node.js command line app to perform CRUD operations on a database used to track employees and departments.",
    notes:
      "MySQL literals were used for all CRUD operations; in other words, no ORM was used in this project.",
    repoURL: "https://github.com/clstevenson/Employee-Tracker",
    deployedURL: "",
    graphicURL: "https://www.youtube.com/embed/tFSILox2Yu4",
    myCommits: 31,
    totalCommits: 31,
    isVideo: true,
    languagePercentage: [{ JavaScript: 100 }],
    isHighlight: true,
    isCollaboration: false,
    tags: ["CLI", "Node.js", "MySQL"],
  },
  {
    id: crypto.randomUUID(),
    title: "Project Ultron",
    description:
      "A front-end app that interfaces to two third-party APIs to retrieve and display data about superheroes, and funny memes related to those characters.",
    notes:
      "This was my first major project involving asynchronous functions, and my first major collaboration as well. We fetched data from two APIs: superheroapi.com and giphy.com. I was responsible for the fetches and display of the giphy.com data. I have forked the project to my GitHub for further work.",
    repoURL: "https://github.com/clstevenson/project-ultron",
    deployedURL: "https://nicholasstacy89.github.io/Project-Ultron/",
    graphicURL: "./assets/Screenshot-Project-Ultron.png",
    myCommits: 27,
    totalCommits: 55,
    isVideo: false,
    languagePercentage: [{ JavaScript: 76.1 }, { HTML: 17.7 }, { CSS: 6.2 }],
    isHighlight: true,
    isCollaboration: true,
    tags: ["front-end", "third-party API"],
  },
  {
    id: crypto.randomUUID(),
    title: "Regular Expressions and JavaScript",
    description:
      "This is a 2000-word tutorial on the use of regular expressions in JavaScript",
    notes:
      "The ability to explain something well requires a deeper understanding of the topic. This tutorial, which could also serve as a reference, explains some of the basics of regular expressions and some of the most important methods of using them in JavaScript programs. Many code snippets are shown as well as references for further study.",
    repoURL:
      "https://gist.github.com/clstevenson/a40c854e46ed28dda567de71129bc1c0",
    deployedURL: "",
    graphicURL: "./assets/RegexTutorial.png",
    myCommits: 11,
    totalCommits: 55,
    isVideo: false,
    languagePercentage: [{ JavaScript: 100 }],
    isHighlight: true,
    isCollaboration: false,
    tags: ["instructional", "regular expressions", "regex", "markdown"],
  },
  {
    id: crypto.randomUUID(),
    title: "Excel Lambda Functions",
    description:
      "At the present time I have written 38 Lambda functions (over 1000 lines of code) to perform a variety of statistical calculations in Excel",
    notes:
      "With the introduction of the LAMBDA and LET functions, Excel's spreadsheet language -- the language used to create cell formulas in Excel -- has become much more powerful; Turing-complete, in fact. Lambda functions can be used in any Excel worksheet or even in the Excel online web applications. Some MS engineers have created an add-in, now called Excel Labs, whereby users can share Lambda functions through GitHub Gists. I have recently made my functions publicly available to all; I also use them in an add-in I am developing (not yet public) for more sophisticated data analysis in Excel. The embedded video is a rather long introduction to using Lambda functions in Excel and why you would want to do so; note that at the time the video was made, the Excel Labs add-in was called the Advanced Formula Environment add-in.",
    repoURL:
      "https://gist.github.com/clstevenson/aadeb15b628e815fea18e986d49bed87",
    deployedURL: "",
    graphicURL: "https://www.youtube.com/embed/vvrakWbI9t4",
    myCommits: 99,
    totalCommits: 55,
    isVideo: true,
    languagePercentage: [{ Excel: 100 }],
    isHighlight: true,
    isCollaboration: false,
    tags: ["instructional", "Excel", "data science", "statistics"],
  },
];

export default projectData;
