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


// //notFound
// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);

// })

// // catch all, 
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({ error: error.message })
// });
