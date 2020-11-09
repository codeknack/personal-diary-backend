import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import auth from "./routes/auth"
import notes from "./routes/notes"

mongoose.connect("mongodb://localhost/personaldiary_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = 8000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("It works!" );
});

auth(app);
notes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});