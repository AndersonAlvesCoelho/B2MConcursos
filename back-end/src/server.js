// require("dotenv/config");
import express from "express";
import cors from "cors";
import routes from "./routes";

require("./database");

const PORT = 3333;
const HOST = "0.0.0.0";

const app = express();

app.use(cors()); // desabilitando cors
app.use(express.json());
app.use(routes);


app.listen(PORT, HOST);


