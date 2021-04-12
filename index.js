const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
