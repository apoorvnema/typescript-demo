import express from "express";
import bodyParser from "body-parser";

import todosRoute from "./routes/todos";

const app = express();
app.use(bodyParser.json());

app.use('/todo', todosRoute);

app.listen(3000);