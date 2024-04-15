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

export default function Project({ project }) {
  return (
    <p>
      {project.description}
    </p>
  )
};
