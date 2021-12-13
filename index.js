const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const list = ["product1", "product2", "product3", "product4"];
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.send(list);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
