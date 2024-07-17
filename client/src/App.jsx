import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />

      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  /* uncomment the next line if you want footer always visible */
  /* (also uncomment the overflow:auto rule in "Main") */
  /* max-height: 100%; */
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  /* overflow: auto; */
`;

export default App;
