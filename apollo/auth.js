import jwt from "jsonwebtoken";

const TOKEN_SECRET = "supersecrettokenwhatever";

export const generateToken = ({ _id }) => jwt.sign({ _id }, TOKEN_SECRET);
export const getUserFromToken = (token) => jwt.verify(token, TOKEN_SECRET);
