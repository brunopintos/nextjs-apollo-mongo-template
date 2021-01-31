import { gql } from "@apollo/client";

const USER = gql`
  query User($user_id: ID!) {
    user(id: $user_id) {
      id
      name
      surname
      picture
      phone
      email
    }
  }
`;

export default USER;
