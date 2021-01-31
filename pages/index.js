import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer";
import { Typography } from "@material-ui/core";
import useSession from "../utils/useSession";
import { websiteName } from "../utils/strings";

const HomeScreen = () => {
  useSession();
  return (
    <MainContainer>
      <Header selected={0} title={`Home - ${websiteName}`} />
      <Typography variant="h1">
        Hello!
        </Typography>
      <Typography variant="h2">
        This is a template to create websites with a front-end in React
        Next js, and a back-end in Apollo Graphql and Mongodb, good luck!
      </Typography>
    </MainContainer>
  );
};

export default HomeScreen;
