const express = require("express");
const app = express();

const greetRoute = require("./routes/greet");
const oauthRoutes = require("./routes/oauthRoutes");

app.use("/greet", greetRoute);

app.use("/oauth", oauthRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
