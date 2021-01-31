import { gql } from "@apollo/client";

const USERS = gql`
  {
    users {
      id
      name
      surname
      picture
      phone
      email
      isBusiness
      deliveries {
        id
        title
      }
      pickUps {
        id
        title
      }
    }
  }
`;

export default USERS;
