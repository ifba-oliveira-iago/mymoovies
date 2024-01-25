const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mooviesRoutes = require("./src/routes/moovies");
const categoryRoutes = require("./src/routes/category");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/moovies", mooviesRoutes);
app.use("/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
