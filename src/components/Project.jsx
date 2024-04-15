/**
 * This component displays a single project, including the following info
 * - title
 * - description of the project
 * - further comments or notes
 * - a screenshot or demo video
 * - link to repo (if one exists)
 * - number of commits (out of total for collaborative projects). Currently
 *   this list is static but eventually it will be dynamically updated using the GitHub API
 * - link to deployed app (if one exists)
 * - technology tags
 */

// local component to return language percentages
// input is an array of objects, each of which gives the language and its contribution
const Languages = ({ percentages }) => {
  const output = percentages.map(lang => (
      `${Object.keys(lang)}: ${Object.values(lang)}%, `
  )).join('');

  return <p><strong>Languages</strong>: {output.substring(0,output.length-2)}</p>
};

export default function Project({ project }) {
  return (
    <section className="project content columns">
      <div className="description column">
        <h3>{project.title}</h3>
        <p><strong>Description</strong>: {project.description}</p>
        <p><strong>Notes</strong>: {project.notes}</p>
        <ul>
          <li><a href={project.repoURL}>Repo</a></li>
          {project.deployedURL && <li><a href={project.deployedURL}>Deployed</a></li>}
          {project.isCollaboration
            ? <li>Collaboration: {project.myCommits} commits (out of {project.totalCommits}) total</li>
            : <li>Number of commits: {project.myCommits}</li>
          }
        </ul>
        {/* only display if languages array exists and is not empty */}
        {project.languagePercentage && project.languagePercentage.length > 0 &&
          <Languages percentages={project.languagePercentage}/>}
        <p><strong>Tags</strong>: {project.tags.join(', ')}</p>
      </div>
      <div className="graphic column">
        <img alt="screenshot" src="./src/assets/HelpingHeroesScreenshot.png"/>
      </div>
    </section>
  )
};
