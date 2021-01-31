import { gql } from "apollo-server-micro";

export default gql`
  type User {
    token: String
    id: ID!
    name: String!
    surname: String!
    picture: String
    phone: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  input SignUpInput {
    name: String!
    surname: String!
    phone: String!
    email: String!
    isBusiness: Boolean
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type Mutation {
    signUp(input: SignUpInput!): User!
    signIn(input: SignInInput!): User!
  }
`;
