import { gql } from "@apollo/client";

const SIGN_IN = gql`
  mutation UserSignIn($user_signin_input: SignInInput!) {
    signIn(input: $user_signin_input) {
      token
      id
      name
      surname
    }
  }
`;

export default SIGN_IN;
