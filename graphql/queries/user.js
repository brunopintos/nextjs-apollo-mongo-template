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
      isBusiness
      deliveries {
        id
        title
        images
        status
        reservationTime
        pickedUpBy {
          id
          name
          surname
        }
      }
      pickUps {
        id
        title
        images
        status
        publishedBy {
          id
          name
          surname
        }
      }
      changeRequests {
        id
        text
        status
        product {
          id
          title
          images
        }
        sender {
          id
          name
          surname
        }
        receiver {
          id
          name
          surname
        }
      }
    }
  }
`;

export default USER;
