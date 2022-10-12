import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:WARpsCigHAX1wIqn@cluster0.jvbasun.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to Database Successfully."))
  .catch((err) => console.log(err));








  
//MongoDB admin Uname: admin P: WARpsCigHAX1wIqn;
