/*
 * Resume page, including link to download PDF
 * Mostly static content
 */

import styled from "styled-components";
import { ContentWrapper, Title } from "../components/MyStyles";
import { WEIGHTS } from "../util/constants";
import Card from "../components/Card";

export default function Resume() {
  return (
    <Wrapper>
      <Card>
        <ResumeTitle>Employment History</ResumeTitle>
        <dl>
          <Date>1999-present</Date>
          <Activity>
            Associcate Professor of Chemistry and Environmental Studies,
            University of Richmond
          </Activity>

          <Date>1993--1999</Date>
          <Activity>
            Assistant Professor of Chemistry, University of Richmond
          </Activity>

          <Date>1991-1993</Date>
          <Activity>
            Postdoctoral Research Scientist, Oak Ridge National Laboratory
          </Activity>
        </dl>

        <Spacer style={{ "--height": "16px" }} />

        <ResumeTitle>Education</ResumeTitle>
        <dl>
          <Date>1986-1991</Date>
          <Activity>
            Ph.D. in Analytical Chemistry, University of Florida
          </Activity>

          <Date>1982-1986</Date>
          <Activity>B.S. in Chemistry, University of North Carolina</Activity>
        </dl>
      </Card>

      <Card>
        <ResumeTitle>Programming</ResumeTitle>
        <p>
          I have developed significant projects using the following programming
          languages:
        </p>
        <List>
          <li>MATLAB</li>
          <li>R</li>
          <li>Excel (spreadsheet language, VBA, Power Query/M)</li>
          <li>C</li>
          <li>
            Full stack web development: HTML, CSS, JavaScript, React, Node,
            MongoDB. I have certifications for completing the University of
            Richmond{" "}
            <a href="https://bootcamps.richmond.edu/coding/" target="_new">
              Coding Boot Camp
            </a>{" "}
            and Josh Comeau's{" "}
            <a href="https://css-for-js.dev" target="_new">
              CSS for JavaScript Developers
            </a>{" "}
            courses.
          </li>
        </List>

        <p>I am also expert in the LaTeX typesetting markup language.</p>
      </Card>

      <Card>
        <ResumeTitle>University Courses Taught</ResumeTitle>
        <List>
          <li>
            Introductory Chemistry (lecture and lab) for STEM majors/minors
          </li>
          <li>
            Pollutant in the Environment (lecture and lab) for non-science
            majors
          </li>
          <li>Environmental Chemistry</li>
          <li>Analytical Chemistry (lecture and lab)</li>
          <li>Measurement Statistics</li>
          <li>
            Two Physical Chemistry lab courses (Thermodynamics, Kinetics,
            Quantum Chemistry)
          </li>
          <li>Introduction to Environmental Studies</li>
          <li>Environmental Ethics</li>
        </List>

        <ResumeTitle>Administrative Experience</ResumeTitle>
        <List>
          <li>Served 10 years as Environmental Studies Program Coordinator</li>
          <li>Served six years as Chemistry Department Chair</li>
          <li>Served two years as Geography Department interim Chair</li>
        </List>

        <p>
          A <a href="./assets/CLS_CV.pdf">printable CV</a> is also available.
        </p>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: min(var(--max-prose-width), 100%);
  margin: 16px auto;
`;

const Date = styled.dt`
  width: fit-content;
  text-align: right;
  font-weight: ${WEIGHTS.bold};

  &:after {
    content: ":";
  }
`;

const Activity = styled.dd`
  padding-left: 2rem;
`;

const ResumeTitle = styled(Title)`
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin: 16px;
`;

const Spacer = styled.div`
  height: var(--height);
  color: transparent;
`;
