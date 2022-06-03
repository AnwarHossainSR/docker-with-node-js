const express = require("express");
require("dotenv").config();
const app = express();

app.get("/test", (req, res) => {
  res.send("<h2>Hi There, I am mah!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
