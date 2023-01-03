const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config()

const routes = require("./routes");
const port = process.env.PORT || 3000;

const app = express();


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(routes);
app.listen(port, () => console.log(`app listening on port ${port}`));
