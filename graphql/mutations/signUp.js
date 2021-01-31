import { gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation UserSignUp($user_signup_input: SignUpInput!) {
    signUp(input: $user_signup_input) {
      token
      id
      name
      surname
    }
  }
`;

export default SIGN_UP;
