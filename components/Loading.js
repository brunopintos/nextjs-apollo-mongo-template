import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Loading = () => (
  <MainContainer>
    <CircularProgress size={60}/>
  </MainContainer>
);

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
