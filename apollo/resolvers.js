import {
  AuthenticationError,
  UserInputError,
} from "apollo-server-micro";
import {
  createUser,
  findUserByEmail,
  getUser,
  getUsers,
} from "./api";
import Bcrypt from "bcrypt";
import { generateToken } from "./auth";

const usersResolver = () => getUsers();

const userResolver = async (root, args) => getUser(args.id);

const tokenResolver = (user) => generateToken(user);

const signInResolver = async (root, args) => {
  const user = await findUserByEmail(args.input.email);
  if (user && Bcrypt.compareSync(args.input.password, user.passwordHash))
    return user;
  throw new AuthenticationError("Invalid user credentials");
};

const signUpResolver = async (root, args) => {
  if (args.input.password.length < 8)
    throw new UserInputError("Password too short");
  const user = await findUserByEmail(args.input.email);
  if (user) throw new UserInputError("Duplicated email");

  return createUser({
    email: args.input.email,
    isBusiness: args.input.isBusiness || false,
    name: args.input.name,
    passwordHash: Bcrypt.hashSync(args.input.password, 10),
    phone: args.input.phone,
    picture: `https://www.tinygraphs.com/squares/${args.input.email}?theme=suga
    rsweets&numcolors=4&size=220`,
    surname: args.input.surname,
  });
};

const resolvers = {
  Mutation: {
    signIn: signInResolver,
    signUp: signUpResolver,
  },
  Query: {
    user: userResolver,
    users: usersResolver,
  },
  User: {
    token: tokenResolver,
  },
};

export default resolvers;
