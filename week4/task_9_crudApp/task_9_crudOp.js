const express = require("express");
const usersRoute = require("./routes/usersRoute");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
app.use(bodyParser.json());
app.use("/api/v1", usersRoute);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
