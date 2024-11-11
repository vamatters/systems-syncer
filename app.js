const express = require("express");

const app = express();

const greetRoute = require("./routes/greet");

app.use("/greet", greetRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
