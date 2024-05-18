const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { handleRun } = require("./src/Controllers/handleRun");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.post("/run", handleRun);

const PORT = process?.env?.PORT || 4000;
app.listen(PORT, () => {
  console.log("server is listing on Port " + PORT);
});
