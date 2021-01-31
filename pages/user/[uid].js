import Header from "../../components/Header/Header";
import Loading from "../../components/Loading";
import MainContainer from "../../components/MainContainer";
import USER from "../../graphql/queries/user";
import User from "../../components/User/User";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useSession from "../../utils/useSession";
import { websiteName } from '../../utils/strings';

const ProfileScreen = () => {
  const router = useRouter();
  const { loading, data, error } = useQuery(USER, {
    variables: { user_id: router.query.uid.toString() },
  });

  useSession();
  return (
    <MainContainer>
      <Header title={`User - ${websiteName}`} />
      {loading ? <Loading /> : error
        ? console.log(error) : <User user={data.user} />}
    </MainContainer>
  );
};

export default ProfileScreen;
