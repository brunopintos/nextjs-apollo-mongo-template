import { Schema, connect, model, models } from "mongoose";

require("dotenv").config();

connect(
  // I'm using MongoDB Clusters, once you create one go to connect, setup 
  // connection security and then choose the "Connect your application" 
  // connection method.

  // Create a .env file and inside of it (replace user, password and dbName):
  // eslint-disable-next-line max-len
  // DB_URL= mongodb+srv://<user>:<password>@basewebsites.hm2ds.mongodb.net/<dbName>?retryWrites=true&w=majority
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new Schema({
  email: { required: true, type: String, unique: true },
  name: { required: true, type: String },
  passwordHash: { required: true, type: String },
  phone: { required: true, type: String },
  picture: String,
  surname: { required: true, type: String },
});

const User = models.User ? model("User") : model("User", userSchema);

export { User };
