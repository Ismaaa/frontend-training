// libs
const express = require("express");
const path = require("path");
const reload = require("reload");

// init
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

// Reload code here
reload(app)
  .then(reloadReturned => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  })
  .catch(err => {
    console.error(
      "Reload could not start, could not start server/sample app",
      err
    );
  });
