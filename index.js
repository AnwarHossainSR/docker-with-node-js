const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const user = [
  {
    name: "Mahedi Hasan",
    age: "21",
    email: "mahedisr@gmail.com",
  },
  {
    name: "Anwar Hossain",
    age: "25",
    email: "mahedisr2@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send(user);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
