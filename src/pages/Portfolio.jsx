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
 *
 * Data fields:
 * - title
 * - description
 * - notes
 * - repo link
 * - deployed link
 * - num_commits (these are my commits)
 * - total_commits (for group projects)
 * - link to graphic (screenshot or demo vid)
 * - isVideo: boolean stating on whether the visual is a video to be embedded
 */

const projectData = [
  {
    title: 'My Updated Project',
    description: 'Coolest project ever developed',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    repoURL: 'https:github.com/clstevenson/my-dev-portfolio',
    deployedURL: '',
    myCommits: 11,
    totalCommits: 11,
    graphic: '',
    isVideo: false
  }
];

export default function Portfolio() {
  return (
    <Project project={projectData[0]} />
  )
}
