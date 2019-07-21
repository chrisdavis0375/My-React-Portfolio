const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json({ extended: false }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/src"));
}

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
