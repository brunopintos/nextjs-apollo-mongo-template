import { Container } from "@material-ui/core";
import styled from "styled-components";

const ColumnContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default ColumnContainer;
