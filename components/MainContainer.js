import { Container } from "@material-ui/core";
import styled from "styled-components";

const MainContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0 40px 0;
    min-height: 100vh;
  }
`;

export default MainContainer;
