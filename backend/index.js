import express, { request, response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/LoginApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database Connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/login", (request, response) => {
  const { email, password } = request.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        response.send({ message: "Login Success", user: user });
      } else {
        response.send({ message: "Invalid password" });
      }
    } else {
      response.send({ message : "User Not Registered"});
    }
  });
});
app.post("/register", (request, response) => {
  const { name, email, password } = request.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      response.send({ Message: "Existing User" });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      user.save((err) => {
        if (err) {
          response.send(err);
        } else {
          response.send({ message: " Registerd , Login Now " });
        }
      });
    }
  });
});

app.listen(6500, () => {
  console.log("Running at PORT 6500");
});
