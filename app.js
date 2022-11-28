import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
const CONNECTION_STRING = 'mongodb+srv://satvikkhetan:WebDevAssignment2022@cluster0.qszkev9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);
HelloController(app)
UsersController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000);