import RowDiv from "../RowDiv";
import UserCard from "./UserCard";
import styled from "styled-components";

const User = ({ user }) => {
  return (
    <UserContainer>
      <UserCard user={user} />
    </UserContainer>
  );
};

const UserContainer = styled(RowDiv)`
  && {
    flex-wrap: wrap;
    padding: 0 2vw;
  }
`;

export default User;
