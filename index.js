// libs
const express = require("express");

// init
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hey !!"));
app.listen(port, () => console.log(`App listening on port ${port}!`));
