// libs
const express = require("express");

// init
const app = express();
const port = 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get("/", (req, res) => res.send("Hey !!"));