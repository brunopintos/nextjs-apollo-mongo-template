import ColumnDiv from "../components/ColumnDiv";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import useSession from "../utils/useSession";
import { websiteName } from "../utils/strings";

const HomeScreen = () => {
  useSession();
  return (
    <MainContainer>
      <Header selected={0} title={`Home - ${websiteName}`} />
      <IndexContainer>
        <H1Text variant="h1">
          Full-stack website template
        </H1Text>
        <H2Text variant="h2">
          React Next js, Apollo Graphql, and Mongodb.
        </H2Text>
      </IndexContainer>
    </MainContainer>
  );
};

const IndexContainer = styled(ColumnDiv)`
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 100px;
`;

const H1Text = styled(Typography)`
  text-align: center;
  font-size: 7vw !important;
  @media (min-width: 1440px) {
    font-size: 100px !important;
  }
  @media (max-width: 768px) {
    font-size: 40px !important;
  }
  @media (max-width: 480px) {
    font-size: 34px !important;
  }
`;

const H2Text = styled(Typography)`
  text-align: center;
  font-size: 4vw !important;
  @media (min-width: 1440px) {
    font-size: 57px !important;
  }
  @media (max-width: 768px) {
    font-size: 24px !important;
  }
  @media (max-width: 480px) {
    font-size: 20px !important;
  }
`;

export default HomeScreen;
