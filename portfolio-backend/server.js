import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

// Establishing connection with database
mongoose
  .connect(
    "mongodb+srv://rwasikur:rwasikur@portfolio-projects.pin2t9j.mongodb.net/projects?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Defining Schema
const projectSchema = new mongoose.Schema({
  key: Number,
  img: String,
  alt: String,
  title: String,
  githubLink: String,
  demoLink: String,
});

// Mongoose Model
const Projectmodel = new mongoose.model("projectcarddetails", projectSchema);

const getDocument = async () => {
  try {
    const output = await Projectmodel.find();
    console.log(output);
  } catch (error) {
    console.error("Error: ", error);
  }
};

getDocument();

app.get("/", async (req, res) => {
  try {
    const data = await Projectmodel.find({}, { _id: 1, img: 1, alt: 1, title: 1, githubLink: 1, demoLink: 1 });
    res.json(data);
  } catch (error) {
    console.error("Error while fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
