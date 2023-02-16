//Connects all files
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//initialize express
const app = express();
const PORT = process.env.PORT || 3001;

//Add static middleware for serving assets in the public folder
app.use(express.static("public"));

//Listenes for requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listens for port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
