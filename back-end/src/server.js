// require("dotenv/config");
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import routes from "./routes";
require("./database");

const PORT = 3333;
const HOST = "0.0.0.0";

const app = express();
app.use(fileUpload({
    createParentPath: true
}))
app.use(cors()); // desabilitando cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')); //to access the files in public folder
app.use(routes);

app.listen(PORT, HOST);


