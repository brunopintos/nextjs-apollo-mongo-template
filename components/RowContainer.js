import { Container } from "@material-ui/core";
import styled from "styled-components";

const RowContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default RowContainer;
