/**
 * This component displays the information associated with a single project
 */

// component to embed YouTube videos (app demos usually) in an iframe
import YoutubeEmbed from '../components/YoutubeEmbed';

// local component to return language percentages (as given by GitHub)
// input is an array of objects, each of which gives the language and its contribution
const Languages = ({ percentages }) => {
  const output = percentages.map(lang => (
    `${Object.keys(lang)}: ${Object.values(lang)}%, `
  )).join('');

  return <p><strong>Languages</strong>: {output.substring(0, output.length - 2)}</p>
};

// now display the info
export default function Project({ project }) {
  return (
    <section className="project content columns box my-2">
      <div className="description column">
        <h3>{project.title}</h3>
        <p><strong>Description</strong>: {project.description}</p>
        <p><strong>Notes</strong>: {project.notes}</p>
        <ul>
          <li><a href={project.repoURL} target="_new">Repo</a></li>
          {project.deployedURL && <li><a href={project.deployedURL} target="_new">Deployed</a></li>}
          {project.isCollaboration
           ? <li>Collaboration: {project.myCommits} commits (out of {project.totalCommits} total)</li>
            : <li>Number of commits: {project.myCommits}</li>
          }
        </ul>
        {/* only display if languages array exists and is not empty */}
        {project.languagePercentage && project.languagePercentage.length > 0 &&
          <Languages percentages={project.languagePercentage} />}
        <p><strong>Tags</strong>: {project.tags.join(', ')}</p>
      </div>
      <div className="graphic column">
        {
          project.isVideo
            ? <YoutubeEmbed embedURL={project.graphicURL}/>
            : <img alt="Project screenshot" src={project.graphicURL} />
        }
      </div>
    </section>
  )
};
