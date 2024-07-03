/**
 * This component displays the information associated with a single project
 */

// component to embed YouTube videos (app demos usually) in an iframe
import YoutubeEmbed from "../components/YoutubeEmbed";
import styled from "styled-components";
import Card from "./Card";
import { COLORS, QUERIES } from "../util/constants";

// local component to return language percentages (as given by GitHub)
// input is an array of objects, each of which gives the language and its contribution
const Languages = ({ percentages }) => {
  const output = percentages
    .map((lang) => `${Object.keys(lang)}: ${Object.values(lang)}%, `)
    .join("");

  return (
    <p>
      <strong>Languages</strong>: {output.substring(0, output.length - 2)}
    </p>
  );
};

// now display the info
export default function Project({ project }) {
  return (
    <Card>
      <Wrapper>
        <Description>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Details>
            <p>
              <strong>Notes</strong>: {project.notes}
            </p>
            <ul>
              <li>
                <a href={project.repoURL} target="_new">
                  Repo
                </a>
              </li>
              {project.deployedURL && (
                <li>
                  <a href={project.deployedURL} target="_new">
                    Deployed
                  </a>
                </li>
              )}
              {project.isCollaboration ? (
                <li>
                  Collaboration: {project.myCommits} commits (out of{" "}
                  {project.totalCommits} total)
                </li>
              ) : (
                <li>Number of commits: {project.myCommits}</li>
              )}
            </ul>
            {/* only display if languages array exists and is not empty */}
            {project.languagePercentage &&
              project.languagePercentage.length > 0 && (
                <Languages percentages={project.languagePercentage} />
              )}
            <p>
              <strong>Tags</strong>: {project.tags.join(", ")}
            </p>
          </Details>
        </Description>
        <Graphic>
          {project.isVideo ? (
            <YoutubeEmbed embedURL={project.graphicURL} />
          ) : (
            <ImageLink href={project.deployedURL} target="_new">
              <img
                alt={`${project.title} screenshot`}
                src={project.graphicURL}
              />
            </ImageLink>
          )}
        </Graphic>
      </Wrapper>
    </Card>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;

  @media ${QUERIES.mobile} {
    flex-direction: column-reverse;
  }
`;

const Description = styled.div`
  flex-basis: 40%;
  flex-shrink: 1;

  & p {
    margin: 1rem 0;
  }
`;

const Graphic = styled.div`
  flex-basis: 60%;
  flex-shrink: 1;
  overflow: hidden;
  outline-offset: 2px;

  &:hover {
    outline: 2px solid ${COLORS.gray[500]};
  }
`;

const ImageLink = styled.a`
  & img {
    width: 100%;
  }

  &:hover img {
    transform-origin: 50% 0%;
    transform: scale(1.1);
    transition: transform 250ms;
  }
`;

const Details = styled.div`
  @media ${QUERIES.tabletAndLess} {
    display: none;
  }
`;
