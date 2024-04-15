/**
 * This component displays information about my coding projects as a filterable list.
 * The input data will be defined here, but eventually will be in a database managed
 * by a separate (small) application.
 */

// TODO: add filtering capabilities tied to input forms (such as a dropdown)
// Users would add tags to display repos reflecting those items

// component to display each object's data
import Project from '../components/Project';
import projectData from '../util/projectdata';

export default function Portfolio() {
  return (
    <div className="content">
      {projectData.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}
